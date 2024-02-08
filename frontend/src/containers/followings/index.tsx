'use client';

import { ChangeEvent, useEffect, useState } from 'react';

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
import {followUser} from "@/services/feed";

const Followings = () => {
  const [followingArray, setFollowingArray] = useState<followingResponse[]>([]);
  const [inputNickname, setInputNickname] = useState('');
  const [isExist, setIsExist] = useState(true);
  const [newFollow, setNewFollow] = useState<searchResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const followingData = await getFollowings();

      setFollowingArray(followingData);
    };

    getData();
  }, []);

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 15) {
      event.target.value = event.target.value.slice(0, 15);
    }
    setInputNickname(event.target.value);
  };


  const handleSearchNickname = () => {
    getSearchByNickname(inputNickname)
      .then((user) => {

        setNewFollow((prevState) => {
          const isUserExist = prevState.some((existingUser) => existingUser.memberId === user.memberId);
          if (!isUserExist) {
            followUser(user.memberId);
            return [...prevState, user];
          }
          return prevState;
        })


      })
      .catch((error) => {
        if (error.message.includes('404')) {
          setIsExist(false);
        }
      });
  };

  return (
    <div className={defaultWrapper({ width: 'max', height: 'auto' })}>
      <Header title='following' hasPrevious />
      <div className={styles.followContentWrapper}>
        <div>
          <div className={styles.nicknameInputWrapper}>
            <span className={styles.searchIcon}>
              <IconMagnify className={styles.searchIcon} />
            </span>

            <input
              className={styles.nicknameInputStyle}
              value={inputNickname}
              onChange={handleTextInput}
            />
            <div className={styles.buttonWrapper}>
              <Button
                onClick={handleSearchNickname}
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
          {newFollow.map((item) => (
            <div key={`${createCounter()}`} className={styles.newUserWrapper}>
              {/*  TODO : imgSrc 수정 */}
              <div className={styles.profileImgTextWrapper}>
                <UserPreview imgSrc={item.imageUrl} nickname={item.nickname} />
              </div>

              <div className={styles.followButtonWrapper}>
                <FollowButton isFollow memberId={item.memberId} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.profilesWrapper}>
          {followingArray.map((item) => (
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
                    imgSrc={item.imageUrl}
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
