'use client';

import { useState } from 'react';

import { feedContent } from '@/types/feed';
import { IconHeart, IconHeartFilledRed } from '#/svgs';
import FollowButton from '@/containers/feed/FollowButton';

import * as styles from './FeedCard.css';
import { cardXsmall } from '@/components/NagCard/cardOptionsSet';
import NagCard from '@/components/NagCard';
import { UserPreview } from '@/components/UserPreview';

const FeedCard = ({
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
  // TODO: fetch follow, favorite initial data
  const [isLike, setIsLike] = useState<boolean>(isFavorite);
  const [likeCount, setLikeCount] = useState<number>(favoriteCount);

  const handleFavoriteClicked = () => {
    setIsLike(!isLike);
    if (isLike) setLikeCount(favoriteCount);
    else setLikeCount(favoriteCount + 1);
  };

  return (
    <div className={styles.feedCardWrapper}>
      <div className={styles.feedHeader}>
        <UserPreview
          imgSrc='/images/userProfileImage/temp-userProfile.png'
          nickname={nickname}
          subText={createdAt}
        />
        {isFollow !== null && <FollowButton isFollow={isFollow} />}
      </div>
      <div className={styles.feedActionBackground}>
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
        <div className={styles.feedNagCard}>
          <NagCard cardOption={cardXsmall(categoryId, '')} />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
