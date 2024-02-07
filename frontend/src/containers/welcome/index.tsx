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
      <div className={styles.characters}>
        <Image
          src='/images/welcome/grandpa.webp'
          alt='main-character'
          width={0}
          height={0}
          sizes='100vw'
          className={styles.grandpa}
        />
        <Image
          src='/images/welcome/boy.webp'
          alt='main-character'
          width={0}
          height={0}
          sizes='100vw'
          className={styles.boy}
        />
      </div>
      <Image
        src='/images/welcome/title.webp'
        alt='title'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.title}
      />
      <div className={styles.subtitle}>아래로 스크롤해서 미리보기</div>
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
