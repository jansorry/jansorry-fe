'use client';

import { ChangeEvent, useState } from 'react';

import { getSearchByNickname } from '@/services/follow';
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
  const [followingArray] = useState<followingResponse[]>([]);
  const [inputNickname, setInputNickname] = useState('');
  const [isExist, setIsExist] = useState(true);
  const [newFollw, setNewFollow] = useState<searchResponse[]>([]);

  const handleTextInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 15) {
      event.target.value = event.target.value.slice(0, 15);
    }
    setInputNickname(event.target.value);
  };

  const handleSearchNickname = async () => {
    const user = await getSearchByNickname(inputNickname);

    if (!user.memberId) {
      setIsExist(false);
      return;
    }
    setNewFollow((prevState) => [...prevState, user]);
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

            <textarea
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
          {newFollw.map((item) => (
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
