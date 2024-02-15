'use client';

import { useEffect, useState } from 'react';

import { feedContent } from '@/types/feed';
import FeedCard from '@/containers/feed/FeedCard';
import { useObserver } from '@/hooks/useObserver';
import { getFeed } from '@/services/feed';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import PostActionButton from '@/components/PostActionButton';
import Loading from '@/components/Loading';

const Feed = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(true);
  const [feeds, setFeeds] = useState<feedContent[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<number>(0);

  const hashtagKeys = [0, 1, 2, 3, 4, 5];
  const hashtagValues: Record<number, string> = {
    0: '#전체',
    1: '#팔로잉',
    2: '#트렌드',
    3: '#10대',
    4: '#20대',
    5: '#30대',
  };

  const fetchFeedData = async () => {
    const data = await getFeed(-1, selectedHashtag);
    setIsLast(data.last);
    setFeeds([...data.content]);
    setIsMounted(true);
  };

  const fetchHashtagFeed = async () => {
    const data = await getFeed(-1, selectedHashtag);
    setIsLast(data.last);
    setFeeds([...data.content]);
  };

  const handleLastDetected = async () => {
    if (isLast || isLoading) return;
    setIsLoading(true);

    const lastActionId: number = feeds[feeds.length - 1]?.actionId;
    const data = await getFeed(lastActionId, selectedHashtag);
    setIsLast(data.last);
    setFeeds([...feeds, ...data.content]);

    setIsLoading(false);
  };

  useEffect(() => {
    if (isMounted) {
      fetchHashtagFeed();
      return;
    }
    fetchFeedData();
  }, [selectedHashtag]);

  const refLast = useObserver(handleLastDetected).ref;

  return (
    <>
      <Header title='모두의 잔소리' />
      {isMounted ? (
        <div className={styles.feedWrapper}>
          <div className={styles.feedHashtagWrapper}>
            {hashtagKeys.map((hashtagKey) => (
              <Button
                key={hashtagKey}
                type='button'
                size='small'
                colorStyle='blue'
                filled={selectedHashtag === hashtagKey}
                onClick={() => setSelectedHashtag(hashtagKey)}
              >
                {hashtagValues[hashtagKey]}
              </Button>
            ))}
          </div>
          {feeds &&
            feeds.map((feedItem) => (
              <FeedCard key={feedItem.actionId} {...feedItem} />
            ))}
          {isLast ? <div>더 이상 피드가 없어요.</div> : <div ref={refLast} />}
        </div>
      ) : (
        <Loading />
      )}
      <PostActionButton />
      <NavBar clickedIndex={1} />
    </>
  );
};

export default Feed;
