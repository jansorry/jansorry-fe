'use client';

import { useState } from 'react';

import { feedContent, feedResponse } from '@/types/feed';
import FeedCard from '@/containers/feed/FeedCard';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import { getFeed } from '@/services/feed';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';

const Feed = ({ content, last }: feedResponse) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(last);
  const [feeds, setFeeds] = useState<feedContent[]>(content);
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

  const handleHashtagClicked = async (hashtagId: number) => {
    if (isLoading) return;
    setIsLoading(true);

    setSelectedHashtag(hashtagId);
    const data = await getFeed(-1, selectedHashtag);
    if (data.last) setIsLast(data.last);
    setFeeds([...data.content]);

    setIsLoading(false);
  };

  const handleLastDetected = async () => {
    if (isLast || isLoading) return;
    setIsLoading(true);

    const lastActionId: number = feeds[feeds.length - 1]?.actionId;
    const data = await getFeed(lastActionId, selectedHashtag);
    if (data.last) setIsLast(data.last);
    setFeeds([...feeds, ...data.content]);

    setIsLoading(false);
  };

  const refLast = useInfiniteObserver(handleLastDetected);

  return (
    <>
      <Header title='모두의 잔소리' />
      <div className={styles.feedWrapper}>
        <div className={styles.feedHashtagWrapper}>
          {hashtagKeys.map((hashtagKey) => (
            <Button
              key={hashtagKey}
              type='button'
              size='small'
              colorStyle='blue'
              filled={selectedHashtag === hashtagKey}
              onClick={() => handleHashtagClicked(hashtagKey)}
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
      <NavBar clickedIndex={1} />
    </>
  );
};

export default Feed;
