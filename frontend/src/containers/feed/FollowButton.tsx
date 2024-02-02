'use client';

import { useState } from 'react';

import * as styles from '@/containers/feed/FeedCard.css';

interface Props {
  isFollow: boolean | null;
}

const FollowButton = ({ isFollow }: Props) => {
  const [isFollowState, setIsFollowState] = useState<boolean | null>(isFollow);
  const handleFollowClicked = () => {
    setIsFollowState(!isFollowState);
    // TODO: fetch follow/unfollow
  };

  return isFollowState ? (
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
  );
};

export default FollowButton;
