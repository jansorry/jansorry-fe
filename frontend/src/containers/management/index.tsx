import Link from 'next/link';

import { IconEdit, IconInstagram, IconRightBracket, IconTwitter } from '#/svgs';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import { UserPreview } from '@/components/UserPreview';

const managementPage = () => {
  return (
    <>
      <Header title='마이페이지' hasPrevious />
      <div className={styles.managementWrapper}>
        <div className={styles.managementProfile}>
          <UserPreview
            imgSrc='/images/userProfileImage/temp-userProfile.png'
            nickname='닉네임'
            size='xLarge'
          />
          <Link href='/management/nicknameEdit'>
            <IconEdit />
          </Link>
        </div>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.managementListContent}
        >
          <div>팀소개</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.managementListContent}
        >
          <div>공지사항</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.managementListContent}
        >
          <div>자주 듣는 질문</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link href='/logout' className={styles.managementListContent}>
          <div>로그아웃</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='/management/withdrawal'
          className={styles.managementListContent}
        >
          <div>회원 탈퇴</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://www.instagram.com/jansorry_official/'
          className={styles.managementSnsListContent}
        >
          <IconInstagram />
          <div>인스타그램</div>
        </Link>
        <Link
          href='https://twitter.com/jansorry_S2'
          className={styles.managementSnsListContent}
        >
          <IconTwitter />
          <div>트위터</div>
        </Link>
      </div>
      <NavBar clickedIndex={3} />
    </>
  );
};

export default managementPage;
