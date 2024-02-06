'use client';

import { useEffect, useState } from 'react';

import { contentWrapper } from '@/styles/wrapper.css';
import { getFollowings } from '@/services/follow';
import { followingResponse } from '@/types/follow';
import createCounter from '@/utils/counter';
import { followingDummy } from '@/containers/followings/dummy';
import * as styles from '@/containers/followings/index.css';
import { defaultWrapper } from '@/styles/common.css';
import { profileItemWrapper } from '@/containers/followings/index.css';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { UserPreview } from '@/components/UserPreview';
import Button from '@/components/Button';

const Followings = () => {
  const [data, setData] = useState<followingResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      // const followingData = await getFollowings();
      // setData(followingData);
      //  dummy
      setData(followingDummy);
    };

    getData();
  }, []);

  return (
    <div className={defaultWrapper({ width: 'max', height: 'max' })}>
      <Header title='follow' hasPrevious />
      <div className={contentWrapper({ contentArea: 'headerAndNavBar' })}>
        <div className={styles.profilesWrapper}>
          {data.map((item, index) => (
            <div
              key={`${createCounter()}`}
              className={styles.profileItemWrapper}
            >
              <UserPreview imgSrc={item.imageUrl} nickname={item.nickname} />
              <Button type='button' size='small' colorStyle='black' filled>
                팔로우
              </Button>
            </div>
          ))}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Followings;
