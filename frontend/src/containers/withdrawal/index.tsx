import { blue } from 'next/dist/lib/picocolors';

import { contentWrapper } from '@/styles/wrapper.css';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';

const withdrawal = () => {
  return (
    <>
      <Header title='탈퇴하기' hasPrevious />
      <div
        className={contentWrapper({
          contentArea: 'headerAndNavBar',
          heightStyle: 'max',
        })}
      >
        <div className={styles.withdrawalWrapper}>
          <div>
            <div className={styles.withdrawalTitle}>
              탈퇴하기 전에 주의해 주세요.
            </div>
            <div>
              <div className={styles.withdrawalContent}>
                - 지금까지 저장해 두었던 영수증 결과들이 모두 사라져요.
              </div>
              <div className={styles.withdrawalContent}>
                - 탈퇴 시 삭제하지 않은 피드는 남아 있어요.
              </div>
              <div className={styles.withdrawalContent}>
                - 사라진 영수증은 다시 복구할 수 없어요.
              </div>
              <div
                className={`${styles.withdrawalContent} ${styles.lastWithdrawalContent}`}
              >
                - 지금 탈퇴 시 다음 명절까지 가입 불가해요.
              </div>
            </div>
          </div>

          <Button type='button' size='large' colorStyle='blue' filled>
            탈퇴하기
          </Button>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default withdrawal;
