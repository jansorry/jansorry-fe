'use client';

import { useEffect, useState } from 'react';

import { contentWrapper } from '@/styles/wrapper.css';
import { getFollowings } from '@/services/follow';
import { followingResponse } from '@/types/follow';
import createCounter from '@/utils/counter';
import { followingDummy } from '@/containers/followings/dummy';
import * as styles from '@/containers/followings/index.css';
import { defaultWrapper } from '@/styles/common.css';
import FollowButton from '@/containers/feed/FollowButton';
import {
  followButtonWrapper,
  profileImgTextWrapper,
} from '@/containers/followings/index.css';
import counter from '@/utils/counter';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { UserPreview } from '@/components/UserPreview';

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
      <Header title='following' hasPrevious />
      <div className={contentWrapper({ contentArea: 'headerAndNavBar' })}>
        <div className={styles.profilesWrapper}>
          {data.map((item, index) => (
            <div key={counter().toString()} className={styles.profilesWrapper}>
              <div
                key={`${createCounter()}`}
                className={styles.profileItemWrapper}
              >
                {/*  TODO : imgSrc 수정 */}
                <div className={styles.profileImgTextWrapper}>
                  <UserPreview
                    imgSrc='/images/userProfileImage/temp-userProfile.png'
                    nickname={item.nickname}
                  />
                </div>

                <div className={styles.followButtonWrapper}>
                  <FollowButton isFollow memberId={item.toId} />
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

export default Followings;
