'use client';

import { useEffect, useState } from 'react';

import { getFollowings, getSearchByNickname } from '@/services/follow';
import { followingResponse, searchResponse } from '@/types/follow';
import createCounter from '@/utils/counter';
import * as styles from '@/containers/followings/index.css';
import { defaultWrapper } from '@/styles/common.css';
import FollowButton from '@/containers/feed/FollowButton';
import { IconMagnify } from '#/svgs';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { UserPreview } from '@/components/UserPreview';
import Button from '@/components/Button';

const Followings = () => {
  const [data, setData] = useState<followingResponse[]>([]);
  const [inputNickname, setInputNickname] = useState('');
  const [isExist, setIsExist] = useState(true);
  const [newFollw, setNewFollow] = useState<searchResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const followingData = await getFollowings();
      setData(followingData);
    };

    getData();
  }, []);

  let searchParam = '';
  useEffect(() => {
    searchParam = inputNickname;
  }, [inputNickname]);

  const searchEventHandler = async () => {
    const user = await getSearchByNickname(searchParam);

    if (!user.memberId) {
      setIsExist(false);
      return;
    }
    setNewFollow((prevState) => [...prevState, user]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNickname(e.target.value);
  };

  return (
    <div className={defaultWrapper({ width: 'max', height: 'auto' })}>
      <Header title='following' hasPrevious />
      <div className={styles.followContentWrapper}>
        <div>
          <div className={styles.nicknameInputWrapper}>
            <span className={styles.searchIcon}>
              <IconMagnify />
            </span>

            <input
              type='text'
              className={styles.nicknameInputStyle}
              maxLength={10}
              value={inputNickname}
              onChange={handleInputChange}
            />
            <div className={styles.buttonWrapper}>
              <Button
                onClick={searchEventHandler}
                type='button'
                size='small'
                colorStyle='blue'
                filled
              >
                +
              </Button>
            </div>
          </div>
          <span
            className={styles.errorText}
            style={{ visibility: isExist ? 'hidden' : 'visible' }}
          >
            사용자가 존재하지 않습니다.
          </span>
        </div>
        <div>
          {newFollw.map((item) => (
            <div key={`${createCounter()}`} className={styles.newUserWrapper}>
              {/*  TODO : imgSrc 수정 */}
              <div className={styles.profileImgTextWrapper}>
                <UserPreview
                  imgSrc='/images/userProfileImage/temp-userProfile.png'
                  nickname={item.nickname}
                />
              </div>

              <div className={styles.followButtonWrapper}>
                <FollowButton isFollow memberId={item.memberId} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.profilesWrapper}>
          {data.map((item) => (
            <div
              key={createCounter().toString()}
              className={styles.profilesWrapper}
            >
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
