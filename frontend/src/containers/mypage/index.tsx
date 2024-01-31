import Link from 'next/link';

import { IconEdit, IconInstagram, IconRightBracket, IconTwitter } from '#/svgs';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import { UserPreview } from '@/components/UserPreview';

const myPage = () => {
  return (
    <>
      <Header title='마이페이지' hasPrevious />
      <div className={styles.myPageWrapper}>
        <div className={styles.myPageProfile}>
          <UserPreview
            imgSrc='/images/userProfileImage/temp-userProfile.png'
            nickname='닉네임'
            size='xLarge'
          />
          <Link href='./change'>
            <IconEdit />
          </Link>
        </div>
        <hr className={styles.myPageSeperateLine} />
        <a
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.myPageListContent}
        >
          <div>팀소개</div>
          <IconRightBracket />
        </a>
        <hr className={styles.myPageSeperateLine} />
        <a
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.myPageListContent}
        >
          <div>공지사항</div>
          <IconRightBracket />
        </a>
        <hr className={styles.myPageSeperateLine} />
        <a
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.myPageListContent}
        >
          <div>자주 듣는 질문</div>
          <IconRightBracket />
        </a>
        <hr className={styles.myPageSeperateLine} />
        <a href='./logout' className={styles.myPageListContent}>
          <div>로그아웃</div>
          <IconRightBracket />
        </a>
        <hr className={styles.myPageSeperateLine} />
        <a href='./quit' className={styles.myPageListContent}>
          <div>회원 탈퇴</div>
          <IconRightBracket />
        </a>
        <hr className={styles.myPageSeperateLine} />
        <a
          href='https://www.instagram.com/jansorry_official/'
          className={styles.myPageSnsListContent}
        >
          <IconInstagram />
          <div>인스타그램</div>
        </a>
        <a
          href='https://twitter.com/jansorry_S2'
          className={styles.myPageSnsListContent}
        >
          <IconTwitter />
          <div>트위터</div>
        </a>
      </div>
      <NavBar clickedIndex={3} />
    </>
  );
};

export default myPage;
