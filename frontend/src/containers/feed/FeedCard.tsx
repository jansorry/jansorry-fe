'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { feedContent } from '@/types/feed';
import { IconHeart, IconHeartFilledRed } from '#/svgs';
import FollowButton from '@/containers/feed/FollowButton';
import useDebounce from '@/hooks/useDebounce';
import { dislikeFeed, likeFeed } from '@/services/feed';

import * as styles from './FeedCard.css';
import { UserPreview } from '@/components/UserPreview';

const FeedCard = ({
  memberId,
  actionId,
  nickname,
  profileImage,
  nag,
  action,
  categoryId,
  categoryTitle,
  favoriteCount,
  isFollow,
  isFavorite,
  createdAt,
}: feedContent) => {
  const isMounted = useRef<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(isFavorite);
  const [likeCount, setLikeCount] = useState<number>(favoriteCount);
  const debouncedLike = useDebounce<boolean>(isLike, 1000);

  type colors = 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow';
  const iconColorMap: Record<number, colors> = {
    1: 'blue',
    2: 'emerald',
    3: 'green',
    4: 'purple',
    5: 'red',
    6: 'yellow',
  };

  const handleLike = async (catchLike: boolean) => {
    if (catchLike) {
      await likeFeed(actionId);
      return;
    }
    await dislikeFeed(actionId);
  };

  const handleFavoriteClicked = () => {
    setIsLike(!isLike);
    if (isFavorite) {
      setLikeCount(isLike ? favoriteCount - 1 : favoriteCount);
      return;
    }
    setLikeCount(isLike ? favoriteCount : favoriteCount + 1);
  };

  useEffect(() => {
    if (isMounted.current) {
      handleLike(debouncedLike);
      return;
    }
    isMounted.current = true;
  }, [debouncedLike]);

  return (
    <div className={styles.feedCardWrapper}>
      <div className={styles.feedHeader}>
        <UserPreview
          imgSrc={profileImage}
          nickname={nickname}
          subText={createdAt}
        />
        {isFollow !== null && (
          <FollowButton isFollow={isFollow} memberId={memberId} />
        )}
      </div>
      <div
        className={styles.feedActionBackground({
          background: 'oatmeal',
        })}
      >
        <div className={styles.feedActionText}>{action}</div>
        <div className={styles.feedFavorite}>
          {likeCount}
          <div
            role='presentation'
            onClick={handleFavoriteClicked}
            className={styles.feedFavoriteIcon}
          >
            {isLike ? <IconHeartFilledRed /> : <IconHeart />}
          </div>
        </div>
      </div>
      <div className={styles.feedFooter}>
        <div>
          <div className={styles.feedNag}>{nag}</div>
          <div className={styles.feedCategoryTitle}>{categoryTitle}</div>
        </div>
        <Image
          src={`/images/icon/icon-${iconColorMap[categoryId]}.webp`}
          alt={`icon-${iconColorMap[categoryId]}`}
          width={0}
          height={0}
          sizes='100vw'
          className={styles.feedNagCard}
        />
      </div>
    </div>
  );
};

export default FeedCard;
