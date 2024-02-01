'use client';

import { liveFeedResponse } from '@/types/feed';

import Header from '@/components/Header';

const Feed = ({ size, content }: liveFeedResponse) => {
  const clicked = () => {
    console.log(size, content);
  };

  return (
    <>
      <Header title='모두의 잔소리' />
      <div>피드 페이지</div>
      <button type='button' onClick={clicked}>
        데이터 확인
      </button>
    </>
  );
};

export default Feed;
