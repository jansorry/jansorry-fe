'use client';

import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import KakaoLoginButton from '@/containers/welcome/KakaoLoginButton';
import * as cardStyles from '@/containers/home/index.css';
import createCounter from '@/utils/counter';
import { NagCardKeyOptions } from '@/types/nagCard';
import { useObserver } from '@/hooks/useObserver';

import * as styles from './index.css';
import NagCard from '@/components/NagCard';
import { cardXsmall } from '@/components/NagCard/cardOptionsSet';
import { subContentStart } from './index.css';

const Welcome = () => {
  const { ref: cardRef, isInViewport: isCardViewed } = useObserver();
  const counter = createCounter();

  const cards = [0, 1, 2, 3, 4, 5, 6];
  const emptyCardOptions: NagCardKeyOptions = {
    categoryKey: 0,
    typeKey: 0,
    sizeKey: 0,
    textStyleKey: 2,
    text: '',
  };

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
      <div className={styles.guidance}>아래로 스크롤해서 미리보기</div>
      <KakaoLoginButton />
      <Image
        src='/images/welcome/bg-bottom.png'
        alt='bg-bottom'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.bgBottom}
      />

      <div ref={cardRef} className={styles.cardContentWrapper}>
        <ul className={cardStyles.cardWrapper}>
          {cards.map((card, index) => (
            <li
              key={counter()}
              className={isCardViewed ? cardStyles.cardElement : styles.notShow}
              style={assignInlineVars({
                [cardStyles.cardIndex]: index.toString(),
              })}
            >
              {card === 0 ? (
                <NagCard cardOption={emptyCardOptions} />
              ) : (
                <NagCard cardOption={cardXsmall(card, '')} />
              )}
            </li>
          ))}
        </ul>
        <div
          className={
            isCardViewed
              ? styles.subtitle({ main: false, align: 'left' })
              : styles.notShow
          }
        >
          카드
        </div>
        <div
          className={
            isCardViewed
              ? styles.subtitle({ main: true, align: 'left' })
              : styles.notShow
          }
        >
          나만의 카드를 만들고
          <br /> 공유해보세요
        </div>
      </div>
    </main>
  );
};

export default Welcome;
