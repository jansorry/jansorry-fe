import Image from 'next/image';

import { ButtonKakaoLogin } from '#/svgs';

import * as styles from './index.css';

const Welcome = () => {
  return (
    <main className={styles.welcomeWrapper}>
      <Image
        src='/images/welcome/bg-top.png'
        alt='bg-top'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.bgTop}
      />
      <Image src='/images/welcome/main-character.png' alt='main-character' width={180} height={180} />
      <Image src='/images/welcome/title.png' alt='title' width={0} height={0} sizes='100vw' className={styles.title} />
      <div>
        <div className={styles.message}>명절 잔소리 얼마나 들어보셨나요?</div>
        <div className={styles.message}>잔소리 영수증을 만들고 비용을 청구하세요</div>
        <div className={styles.message}>누구 잔소리가 가장 많은지 실시간으로 공유해보세요</div>
      </div>
      <Image
        src='/images/welcome/button-kakao-login.png'
        alt='kakao-login-button'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.kakaoLoginButton}
      />
      <Image
        src='/images/welcome/bg-bottom.png'
        alt='bg-bottom'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.bgBottom}
      />
    </main>
  );
};

export default Welcome;
