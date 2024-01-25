import Image from 'next/image';

import KakaoLoginButton from '@/containers/welcome/KakaoLoginButton';

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
      <div>
        <Image src='/images/welcome/title.png' alt='title' width={200} height={200} className={styles.title} />
      </div>
      <div>
        <div className={styles.subtitle}>명절 잔소리 얼마나 들어보셨나요?</div>
        <div className={styles.subtitle}>잔소리 영수증을 만들고 비용을 청구하세요</div>
        <div className={styles.subtitle}>누구 잔소리가 가장 많은지 실시간으로 공유해보세요</div>
      </div>
      <KakaoLoginButton />
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
