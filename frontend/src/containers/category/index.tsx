'use client';

import { RefObject, useState } from 'react';

import { nagResponse } from '@/types/nag';
import { useObserver } from '@/hooks/useObserver';
import { IconRightBracket } from '#/svgs';
import { categoryKeys, categoryValues } from '@/utils/categoryRecord';

import Header from '@/components/Header';
import * as styles from './index.css';
import { categoryContentTitle } from './index.css';

interface Props {
  nagItems: nagResponse[];
}

const Category = ({ nagItems }: Props) => {
  const [isFocused, setIsfocused] = useState(1);

  const refUndefined = useObserver(0, setIsfocused);
  const refCareer = useObserver(1, setIsfocused);
  const refHealth = useObserver(2, setIsfocused);
  const refMarry = useObserver(3, setIsfocused);
  const refWork = useObserver(4, setIsfocused);
  const refFamily = useObserver(5, setIsfocused);
  const refEtc = useObserver(6, setIsfocused);

  const refMap: Map<number, RefObject<HTMLDivElement>> = new Map([
    [1, refCareer],
    [2, refHealth],
    [3, refMarry],
    [4, refWork],
    [5, refFamily],
    [6, refEtc],
  ]);

  const onScroll = (refcurrent: React.RefObject<HTMLDivElement>, e: number) => {
    if (refcurrent.current) {
      refcurrent.current.style.scrollMargin = '80px';
      refcurrent.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsfocused(e);
    }
  };

  return (
    <>
      <Header title='카테고리' hasPrevious />
      <div className={styles.categoryWrapper}>
        <section className={styles.categoryLeft}>
          <ul>
            {categoryKeys.map((categoryKey: number) => (
              <div
                className={
                  isFocused === categoryKey
                    ? styles.selectedCategoryKeys
                    : styles.categoryKeys
                }
                key={categoryKey}
                role='presentation'
                ref={refMap.get(categoryKey)}
                onClick={() =>
                  onScroll(refMap.get(categoryKey) ?? refUndefined, categoryKey)
                }
              >
                {categoryValues[categoryKey as keyof typeof categoryValues]}
              </div>
            ))}
          </ul>
        </section>
        <div className={styles.categoryRight}>
          {nagItems.map((nagItem: nagResponse) => (
            <div ref={refMap.get(nagItem.categoryId)} key={nagItem.categoryId}>
              <hr className={styles.categorySeperateLine} />
              <div className={categoryContentTitle}>{nagItem.title}</div>
              {nagItem.nags.map((nag) => (
                <div key={nag.nagId} className={styles.categoryContentWrapper}>
                  <div className={styles.categoryContent}>{nag.content}</div>
                  <IconRightBracket />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
