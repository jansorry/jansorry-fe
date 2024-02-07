'use client';

import { contentWrapper } from '@/styles/wrapper.css';
import { putNewNickname } from '@/services/management';

import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import * as styles from './index.css';

const nicknameEdit = () => {
  const handleEditClicked = () => {
    putNewNickname('ntgg3620')
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
                type='text'
                className={styles.nicknameInputStyle}
                maxLength={10}
              />
            </div>
            <div className={styles.nicknameEditContent}>
              - 닉네임은 최대 10자까지 가능해요.
            </div>
            <div className={styles.nicknameEditContent}>
              - 알파벳 대소문자, 한글, 숫자만 가능해요.
            </div>
          </div>

          <Button
            type='button'
            size='large'
            colorStyle='blue'
            filled
            onClick={handleEditClicked}
          >
            닉네임 변경하기
          </Button>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default nicknameEdit;
