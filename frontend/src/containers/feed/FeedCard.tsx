'use client';

import { useState } from 'react';

import { feedContent } from '@/types/feed';
import { IconHeart, IconHeartFilledRed } from '#/svgs';

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
  createdAt,
}: feedContent) => {
  // TODO: fetch follow, favorite initial data

  const [isFollow, setIsFollow] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(favoriteCount);

  const handleFollowClicked = () => {
    setIsFollow(!isFollow);
    // TODO: fetch follow/unfollow
  };

  const handleFavoriteClicked = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) setLikeCount(favoriteCount);
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
        {isFollow ? (
          <button
            type='button'
            className={styles.feedFollowButton({ follow: true })}
            onClick={handleFollowClicked}
          >
            팔로잉
          </button>
        ) : (
          <button
            type='button'
            className={styles.feedFollowButton({ follow: false })}
            onClick={handleFollowClicked}
          >
            팔로우
          </button>
        )}
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
            {isFavorite ? <IconHeartFilledRed /> : <IconHeart />}
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
