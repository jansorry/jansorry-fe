'use client';

import { useEffect, useState } from 'react';

import { userDataResponse, actionTotalCount } from '@/types/userData';
import { totalReceiptCountResponse } from '@/types/receipt';
import { UserProfile } from '@/containers/mypage/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';

interface Props {
  myPageItems: userDataResponse;
  actionsData: actionTotalCount;
  receiptCount: totalReceiptCountResponse;
}

const MyPageContainer = () => {
  // { myPageItems, actionsData, receiptCount }: Props
  // const [NagCount, setNagCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const contentLength = actionsData.content?.length ?? 0;
  //   setNagCount(contentLength);
  //   setIsLoading(false);
  // }, [actionsData]);
  const NagCount = 2;
  const renderMyCard = () => {
    // if (isLoading) {
    //   return <Loading />;
    // }

    // if (isLoading) {
    //   return <Loading />;
    // }
    const actionsData = {
      content: [
        {
          categoryId: 1,
          nagContent: '대학은 어디 갈거니?',
          actionId: 19,
          actionContent: '왜잉래래래랠래5',
        },
        {
          categoryId: 1,
          nagContent: '대학은 어디 갈거니?',
          actionId: 18,
          actionContent: '왜잉래래래랠래5',
        },
        {
          categoryId: 1,
          nagContent: '그 대학 간 거 만족하니?',
          actionId: 17,
          actionContent: '왜잉래래래랠래5',
        },
        {
          categoryId: 1,
          nagContent: '이번 모의고사 몇 등급이니?',
          actionId: 16,
          actionContent: '왜잉래래래랠래5',
        },
        {
          categoryId: 1,
          nagContent: '이번 모의고사 몇 등급이니?',
          actionId: 9,
          actionContent: '잔소리는 그만~~~!5',
        },
        {
          categoryId: 1,
          nagContent: '이번 모의고사 몇 등급이니?',
          actionId: 8,
          actionContent: '잔소리는 그만~~~!3333',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 7,
          actionContent: '잔소리는 그만~~~!3333',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 6,
          actionContent: '잔소리는 그만~~~!222',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 5,
          actionContent: '잔소리는 그만~~~!',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 4,
          actionContent: '앞으로 열심히 하겠습니다.4',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 3,
          actionContent: '앞으로 열심히 하겠습니다.4',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 2,
          actionContent: '앞으로 열심히 하겠습니다.4',
        },
        {
          categoryId: 1,
          nagContent: '언제까지 그렇게 놀거니?',
          actionId: 1,
          actionContent: '앞으로 열심히 하겠습니다.4',
        },
      ],
      pageable: {
        pageNumber: 0,
        pageSize: 20,
        sort: {
          empty: true,
          sorted: false,
          unsorted: true,
        },
        offset: 0,
        paged: true,
        unpaged: false,
      },
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      numberOfElements: 13,
      number: 0,
      first: true,
      last: true,
      size: 20,
      empty: false,
    };
    const NagCount = 3;
    return NagCount > 0 ? (
      <ProfileWithContent
        totalActionCards={actionsData.content}
        // totalReceiptCount={receiptCount}
      />
    ) : (
      <ProfileNoContent
      // totalReceiptCount={receiptCount}
      />
    );
  };

  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          {/* <UserProfile myPageItems={myPageItems} /> */}
        </div>
        {renderMyCard()}
        <div className={styles.bottomNav}>
          <NavBar clickedIndex={3} />
        </div>
      </main>
    </>
  );
};

export default MyPageContainer;
