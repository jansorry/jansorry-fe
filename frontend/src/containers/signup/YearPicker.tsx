'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Props {
  temp: (n: number) => void;
  //  그냥 year값을 넘겨주는 함수 필요함
}

const YearPicker = ({ temp }: Props) => {
  const minYear: number = 1900;
  const maxYear: number = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const children = Array.from(list.children) as HTMLElement[];
    //  상단 픽셀 사이즈를 여기에 할당해줘야되는디. 이게 말이되냐?
    const centerPosition = list.scrollTop + list.clientHeight / 2 + 80 + 21.33;
    // console.log(list.scrollTop);
    console.log(centerPosition);
    const closestChild = children.reduce((closest, child) => {
      const childCenter = child.offsetTop + child.clientHeight / 2;
      const closestCenter = closest.offsetTop + closest.clientHeight / 2;
      return Math.abs(childCenter - centerPosition) < Math.abs(closestCenter - centerPosition) ? child : closest;
    }, children[0]);

    setSelectedYear(parseInt(closestChild.getAttribute('data-year') ?? '', 10));
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return () => {};

    list.addEventListener('scroll', handleScroll);
    return () => list.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    temp(selectedYear);
  }, [selectedYear]);

  const yearCount = maxYear - minYear + 1;
  const paddingItemsCount = 1; // 빈 <div> 요소의 개수를 정의합니다.

  return (
    <div
      style={{
        width: '50%',
        overflowY: 'auto',
        height: '186px',
        boxSizing: 'border-box',
      }}
      ref={listRef}
    >
      {Array.from({ length: paddingItemsCount }).map((_, index) => (
        <div key={`padding-top-${index}`} style={{ width: '100%', height: '62px', visibility: 'hidden' }} />
      ))}
      {Array.from({ length: yearCount }, (_, index) => {
        const year = maxYear - index;
        return (
          <div
            key={year}
            data-year={year}
            style={{
              width: '100px',
              height: '62px',
              paddingRight: '10px',
              paddingLeft: '10px',

              borderRadius: '16px',
              cursor: 'pointer',
              backgroundColor: year === selectedYear ? 'blue' : 'transparent',
              color: year === selectedYear ? 'white' : 'black',
              display: 'flex', // Flexbox 레이아웃 사용
              justifyContent: 'center', // 좌우 중앙 정렬
              alignItems: 'center',
              fontSize: '32px',
            }}
          >
            {year}
          </div>
        );
      })}
      {Array.from({ length: paddingItemsCount }).map((_, index) => (
        <div key={`padding-bottom-${index}`} style={{ width: 'auto', height: '62px', visibility: 'hidden' }} />
      ))}
    </div>
  );
};

export default YearPicker;
