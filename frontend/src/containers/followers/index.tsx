'use client';

import { useEffect, useState } from 'react';

import * as styles from './index.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { getFollowers } from '@/services/follow';
import { followerResponse } from '@/types/follow';
import createCounter from '@/utils/counter';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { UserPreview } from '@/components/UserPreview';
import Button from '@/components/Button';
import { followContentWrapper } from '@/containers/followings/index.css';
import { followingDummy } from '@/containers/followings/dummy';
import { followerDummy } from '@/containers/followers/dummy';

const Followers = () => {
  const [data, setData] = useState<followerResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      // const followerData = await getFollowers();
      // TODO : 더미데이터 삭제
      const followerData = followerDummy
      setData(followerData);
    };

    getData();
  }, []);

  return (
    <div className={styles.defaultWrapper({ width: 'max', height: 'max' })}>
      <Header title='follow' hasPrevious />
      <div className={followContentWrapper}>
<div className={styles.profile}>
  {data.map((item, index) => (

    <div key={`${createCounter()}`}>
      {/* TODO : 이미지링크 변경 */}
      <UserPreview imgSrc={'/images'} nickname={item.nickname} />
    </div>
  ))}
</div>

      </div>
      <NavBar />
    </div>
  );
};

export default Followers;
