'use client';

import { useState } from 'react';

import { feedContent, liveFeedResponse } from '@/types/feed';
import FeedCard from '@/containers/feed/FeedCard';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import { getLiveFeed } from '@/services/feed';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

const Feed = ({ content, last }: liveFeedResponse) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(last);
  const [feeds, setFeeds] = useState<feedContent[]>(content);

  const handleLastDetected = async () => {
    if (isLast || isLoading) return;
    setIsLoading(true);

    const lastActionId: number = content[content.length - 1].actionId;
    const data = await getLiveFeed(lastActionId);
    console.log(data);
    if (data.last) setIsLast(data.last);
    setFeeds([...feeds, ...data.content]);

    setIsLoading(false);
  };

  const refLast = useInfiniteObserver(handleLastDetected);

  return (
    <>
      <Header title='모두의 잔소리' />
      <div className={styles.feedWrapper}>
        {feeds &&
          feeds.map((feedItem) => (
            <FeedCard key={feedItem.actionId} {...feedItem} />
          ))}
        <div ref={refLast} />
      </div>
      <NavBar clickedIndex={1} />
    </>
  );
};

export default Feed;
