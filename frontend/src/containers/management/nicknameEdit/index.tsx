'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import { contentWrapper } from '@/styles/wrapper.css';
import { putNewNickname } from '@/services/management';

import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import * as styles from './index.css';

const NicknameEdit = () => {
  const router = useRouter();
  const [newNickname, setNewNickname] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [wrongType, setWrongType] = useState(false);
  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 15) {
      event.target.value = event.target.value.slice(0, 15);
    }
    setNewNickname(event.target.value);
  };

  const handleEditNickname = (nickname: string) => {
    putNewNickname(nickname)
      .then(() => {
        router.push('/mypage');
      })
      .catch((e) => {
        if (e.errorCode === 409) {
          setIsDuplicated(true);
          return;
        }
        if (e.errorCode === 400) {
          setWrongType(true);
        }
      });
  };

  return (
    <>
      <Header title='닉네임 변경하기' hasPrevious />
      <div
        className={contentWrapper({
          contentArea: 'headerAndNavBar',
          heightStyle: 'max',
        })}
      >
        <div className={styles.nicknameEditWrapper}>
          <div>
            <div className={styles.nicknameEditTitle}>
              변경할 닉네임을 입력해주세요
            </div>
            <div className={styles.nicknameInputWrapper}>
              <input
                value={newNickname}
                className={styles.nicknameInputStyle}
                onChange={handleTextInput}
              />
            </div>
            <div className={styles.nicknameEditContent}>
              - 닉네임은 최대 15자까지 가능해요.
            </div>
            <div
              className={
                !wrongType
                  ? styles.nicknameEditContent
                  : styles.nicknameErrorContent
              }
            >
              - 알파벳 대소문자, 한글, 숫자만 가능해요.
            </div>
            <div className={styles.nicknameErrorContent} hidden={!isDuplicated}>
              - 중복된 닉네임입니다.
            </div>
          </div>

          <Button
            onClick={() => handleEditNickname(newNickname)}
            type='button'
            size='large'
            colorStyle='blue'
            filled
          >
            닉네임 변경하기
          </Button>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default NicknameEdit;
