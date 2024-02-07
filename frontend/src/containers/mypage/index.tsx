// 'use client';
//
// import { useEffect, useState } from 'react';
//
// import { userDataResponse, actionTotalCountResponse } from '@/types/userData';
// import { totalReceiptCountResponse } from '@/types/receipt';
// import { UserProfile } from '@/containers/mypage/UserProfile';
//
// import Header from '@/components/Header';
// import * as styles from './index.css';
// import ProfileWithContent from './ProfileWithContent';
// import ProfileNoContent from './ProfileNoContent';
// import NavBar from '@/components/NavBar';
// import Loading from '@/components/Loading';
//
// interface Props {
//   myPageItems: userDataResponse;
//   actionsData: actionTotalCountResponse;
//   receiptCount: totalReceiptCountResponse;
// }
//
// const MyPageContainer = ({ myPageItems, actionsData, receiptCount }: Props) => {
//   const [NagCount, setNagCount] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//
//   useEffect(() => {
//     const contentLength = actionsData.content?.length ?? 0;
//     setNagCount(contentLength);
//     setIsLoading(false);
//   }, [actionsData]);
//
//   const renderMyCard = () => {
//     if (isLoading) {
//       return <Loading />;
//     }
//
//     return NagCount > 0 ? (
//       <ProfileWithContent {...actionsData} {...receiptCount} />
//     ) : (
//       <ProfileNoContent {...receiptCount} />
//     );
//   };
//
//   return (
//     <>
//       <Header title='나의 잔소리 목록' />
//       <main className={styles.profileWrapper}>
//         <div className={styles.profileContentWrapper}>
//           <UserProfile {...myPageItems} />
//         </div>
//         {renderMyCard()}
//         <div className={styles.bottomNav}>
//           <NavBar clickedIndex={3} />
//         </div>
//       </main>
//     </>
//   );
// };
//
// export default MyPageContainer;

'use client';

import { useEffect, useState } from 'react';

import { actionTotalCountResponse } from '@/types/userData';
import { UserProfile } from '@/containers/mypage/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import UserDefaultImage from '../../../public/images/userProfileImage/defaultProfileImage.png';
import Loading from '@/components/Loading';

const actionsData: actionTotalCountResponse = {
  content: [
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 42,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 41,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 3,
      nagContent: '대학은 어디 갈거니?',
      actionId: 40,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 39,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 38,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 37,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 3,
      nagContent: '대학은 어디 갈거니?',
      actionId: 36,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 35,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 34,
      actionContent: '2왜잉래래래랠래5',
    },
    {
      categoryId: 3,
      nagContent: '그 대학 간 거 만족하니?',
      actionId: 33,
      actionContent: '3왜잉래래래랠래5',
    },
    {
      categoryId: 2,
      nagContent: '이번 모의고사 몇 등급이니?',
      actionId: 32,
      actionContent: '왜잉래래래랠래5',
    },
    {
      categoryId: 3,
      nagContent: '이번 모의고사 몇 등급이니?',
      actionId: 31,
      actionContent: '잔소리는 그만~~~!5',
    },
    {
      categoryId: 2,
      nagContent: '이번 모의고사 몇 등급이니?',
      actionId: 30,
      actionContent: '잔소리는 그만~~~!3333',
    },
    {
      categoryId: 5,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 29,
      actionContent: '잔소리는 그만~~~!3333',
    },
    {
      categoryId: 1,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 28,
      actionContent: '잔소리는 그만~~~!222',
    },
    {
      categoryId: 3,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 27,
      actionContent: '잔소리는 그만~~~!',
    },
    {
      categoryId: 2,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 26,
      actionContent: '앞으로 열심히 하겠습니다.4',
    },
    {
      categoryId: 4,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 25,
      actionContent: '앞으로 열심히 하겠습니다.4',
    },
    {
      categoryId: 1,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 24,
      actionContent: '앞으로 열심히 하겠습니다.4',
    },
    {
      categoryId: 2,
      nagContent: '언제까지 그렇게 놀거니?',
      actionId: 23,
      actionContent: '앞으로 열심히 하겠습니다.4',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 22,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 21,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 20,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 19,
      actionContent: '1왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '대학은 어디 갈거니?',
      actionId: 18,
      actionContent: '2왜잉래래래랠래5',
    },
    {
      categoryId: 1,
      nagContent: '그 대학 간 거 만족하니?',
      actionId: 17,
      actionContent: '3왜잉래래래랠래5',
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
  numberOfElements: 42,
  number: 0,
  first: true,
  last: false,
  size: 20,
  empty: false,
};

interface Props {
  actionsData: actionTotalCountResponse;
}

const receiptCount = { receiptCount: 3 };
const NagCount: number = 42;
const myPageItems = {
  nickname: '무한스크롤만하면돼~',
  imageUrl: '/public/images/userProfileImage/defaultProfileImage.png',
  followerCnt: 9999,
  followingCnt: 9999,
};

const MyPageContainer = () => {
  // const [NagCount, setNagCount] = useState<number>(0);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  const renderMyCard = () => {
    // if (isLoading) {
    //   return <Loading />;
    // }

    return NagCount > 0 ? (
      <ProfileWithContent actionsData={actionsData} {...receiptCount} />
    ) : (
      <ProfileNoContent {...receiptCount} />
    );
  };

  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          <UserProfile {...myPageItems} />
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
