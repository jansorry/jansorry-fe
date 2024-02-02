'use client';

import { RefObject, useState } from 'react';
import { useRouter } from 'next/navigation';

import { nagTotalResponse } from '@/types/nag';
import { useCategoryObserver } from '@/hooks/useCategoryObserver';
import { IconRightBracket } from '#/svgs';
import { categoryKeys, categoryValues } from '@/utils/categoryRecord';

import Header from '@/components/Header';
import * as styles from './index.css';
import { categoryContentTitle } from './index.css';

interface Props {
  nagItems: nagTotalResponse[];
}

const Category = ({ nagItems }: Props) => {
  const router = useRouter();

  const [isFocused, setIsfocused] = useState(1);

  const refUndefined = useCategoryObserver(0, setIsfocused);
  const refCareer = useCategoryObserver(1, setIsfocused);
  const refHealth = useCategoryObserver(2, setIsfocused);
  const refMarry = useCategoryObserver(3, setIsfocused);
  const refWork = useCategoryObserver(4, setIsfocused);
  const refFamily = useCategoryObserver(5, setIsfocused);
  const refEtc = useCategoryObserver(6, setIsfocused);

  const refMap: Map<number, RefObject<HTMLDivElement>> = new Map([
    [1, refCareer],
    [2, refHealth],
    [3, refMarry],
    [4, refWork],
    [5, refFamily],
    [6, refEtc],
  ]);

  const handleScroll = (refCurrent: React.RefObject<HTMLDivElement>) => {
    if (refCurrent.current) {
      refCurrent.current.style.scrollMargin = '80px';
      refCurrent.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
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
                  handleScroll(refMap.get(categoryKey) ?? refUndefined)
                }
              >
                {categoryValues[categoryKey as keyof typeof categoryValues]}
              </div>
            ))}
          </ul>
        </section>
        <div className={styles.categoryRight}>
          {nagItems.map((nagItem: nagTotalResponse) => (
            <div ref={refMap.get(nagItem.categoryId)} key={nagItem.categoryId}>
              <hr className={styles.categorySeperateLine} />
              <div className={categoryContentTitle}>{nagItem.title}</div>
              {nagItem.nags.map((nag) => (
                <div
                  key={nag.nagId}
                  role='presentation'
                  className={styles.categoryContentWrapper}
                  onClick={() => router.push(`/createcard/${nag.nagId}`)}
                >
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
