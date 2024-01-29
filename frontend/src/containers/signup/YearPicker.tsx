'use client';

import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { selectedYearState } from '@/states/signup';

import * as styles from './index.css';

const YearPicker = () => {
  const minYear: number = 1900;
  const maxYear: number = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useRecoilState(selectedYearState);
  const listRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const listRect = list.getBoundingClientRect(); // 리스트의 화면상 위치 및 크기 정보
    const viewportCenter = listRect.top + list.clientHeight / 2; // 뷰포트 상의 리스트 중앙 위치

    const children = Array.from(list.children) as HTMLElement[];
    const closestChild = children.reduce((closest, child) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.top + childRect.height / 2; // 화면상의 각 항목의 중앙 위치
      const closestRect = closest.getBoundingClientRect();
      const closestCenter = closestRect.top + closestRect.height / 2;

      return Math.abs(childCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter) ? child : closest;
    }, children[0]);

    setSelectedYear(parseInt(closestChild.getAttribute('data-year') ?? '', 10));
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return () => {};

    list.addEventListener('scroll', handleScroll);
    return () => list.removeEventListener('scroll', handleScroll);
  }, []);

  const yearCount = maxYear - minYear + 1;
  const paddingItemsCount = 1; // 빈 <div> 요소의 개수를 정의합니다.

  return (
    <div className={styles.selectWrapper({ content: 'yearPicker' })} ref={listRef}>
      {Array.from({ length: paddingItemsCount }).map((_, index) => (
        <div key={`padding-top-${index}`} className={styles.yearPickerBox({ show: 'hidden' })} />
      ))}
      {Array.from({ length: yearCount }, (_, index) => {
        const year = maxYear - index;
        return (
          <div
            key={year}
            data-year={year}
            className={`${styles.yearPickerBox()} ${
              year === selectedYear ? styles.yearPickerBoxVariants.selected : styles.yearPickerBoxVariants.unselected
            }`}
          >
            {year}
          </div>
        );
      })}
      {Array.from({ length: paddingItemsCount }).map((_, index) => (
        <div key={`padding-bottom-${index}`} className={styles.yearPickerBox({ show: 'hidden' })} />
      ))}
    </div>
  );
};

export default YearPicker;
