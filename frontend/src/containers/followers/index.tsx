'use client';

import { useEffect, useState } from 'react';

import { getFollowers } from '@/services/follow';
import { followerResponse } from '@/types/follow';
import createCounter from '@/utils/counter';
import { followContentWrapper } from '@/containers/followings/index.css';
import { defaultWrapper } from '@/styles/common.css';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { UserPreview } from '@/components/UserPreview';
import * as styles from './index.css';

const Followers = () => {
  const [data, setData] = useState<followerResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const followerData = await getFollowers();

      setData(followerData);
    };

    getData();
  }, []);

  return (
    <div className={defaultWrapper({ width: 'max', height: 'max' })}>
      <Header title='follower' hasPrevious />
      <div className={followContentWrapper}>
        <div className={styles.profilesWrapper}>
          {data.map((item) => (
            <div className={styles.profileItemWrapper}>
              {/* TODO : Wrapper꾸미기 */}
              <div className={styles.profileImgTextWrapper}>
                <div key={`${createCounter()}`}>
                  {/* TODO : 이미지링크 변경 */}
                  <UserPreview imgSrc='/images' nickname={item.nickname} />
                </div>
              </div>
              <hr className={styles.userSeperateLine} />
            </div>
          ))}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Followers;
