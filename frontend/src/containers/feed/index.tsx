'use client';

import { liveFeedResponse } from '@/types/feed';
import FeedCard from '@/containers/feed/FeedCard';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

const Feed = ({ size, content }: liveFeedResponse) => {
  return (
    <>
      <Header title='모두의 잔소리' />
      <div className={styles.feedWrapper}>
        {content &&
          content.map((feedContent) => (
            <FeedCard key={feedContent.actionId} {...feedContent} />
          ))}
      </div>
      <NavBar clickedIndex={1} />
    </>
  );
};

export default Feed;
