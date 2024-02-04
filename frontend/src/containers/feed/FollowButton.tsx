'use client';

import { useEffect, useRef, useState } from 'react';

import * as styles from '@/containers/feed/FeedCard.css';
import useDebounce from '@/hooks/useDebounce';
import { followUser, unfollowUser } from '@/services/feed';

interface Props {
  isFollow: boolean | null;
  nickname: string;
}

const FollowButton = ({ isFollow, nickname }: Props) => {
  const isMounted = useRef<boolean>(false);
  const [isFollowState, setIsFollowState] = useState<boolean | null>(isFollow);
  const debouncedFollow = useDebounce<boolean | null>(isFollowState, 3000);

  const handleFollow = async (catchFollow: boolean) => {
    if (catchFollow) {
      await followUser(nickname);
      return;
    }
    await unfollowUser(nickname);
  };

  const handleFollowClicked = () => {
    setIsFollowState(!isFollowState);
  };

  useEffect(() => {
    if (isMounted.current && debouncedFollow !== null) {
      handleFollow(debouncedFollow);
      return;
    }
    isMounted.current = true;
  }, [debouncedFollow]);

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
