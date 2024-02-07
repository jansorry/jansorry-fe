import { assignInlineVars } from '@vanilla-extract/dynamic';

import { homeCardsResponse } from '@/types/home';
import { NagCardKeyOptions } from '@/types/nagCard';
import createCounter from '@/utils/counter';

import * as styles from './index.css';
import NagCard from '@/components/NagCard';
import { cardXsmall } from '@/components/NagCard/cardOptionsSet';

const CardsPresent = ({ count, categoryList }: homeCardsResponse) => {
  const createCardViews = (cardCount: number, cardList: number[]): number[] => {
    if (cardCount > 7) {
      const startIndex = cardList.length - 6;
      const endIndex = cardList.length;
      return [-1, ...cardList.slice(startIndex, endIndex)];
    }
    const subArray = new Array(7 - cardCount).fill(-1);
    return [...subArray, ...cardList];
  };

  const cardViews = createCardViews(count, categoryList);
  const counter = createCounter();

  const emptyCardOptions: NagCardKeyOptions = {
    categoryKey: 0,
    typeKey: 0,
    sizeKey: 0,
    textStyleKey: 2,
    text: '',
  };

  return (
    <>
      <div className={styles.cardArea} />
      <ul className={styles.cardWrapper}>
        {cardViews.map((cardView, index) => (
          <li
            key={counter()}
            className={styles.cardElement}
            style={assignInlineVars({
              [styles.cardIndex]: index.toString(),
            })}
          >
            {cardView === -1 ? (
              <NagCard cardOption={emptyCardOptions} />
            ) : (
              <NagCard cardOption={cardXsmall(cardView, '')} />
            )}
          </li>
        ))}
      </ul>
      <div className={styles.homeText({ contentType: 'content' })}>
        잔소리를 {count}번 들었어요.
      </div>
      <div className={styles.homeText({ contentType: 'guidance' })}>
        터치하면 내 카드 목록을 볼 수 있어요
      </div>
    </>
  );
};

export default CardsPresent;
