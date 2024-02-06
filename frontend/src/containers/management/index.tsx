import Link from 'next/link';

import { IconInstagram, IconRightBracket, IconTwitter } from '#/svgs';
import { ManagementUserProfile } from '@/containers/management/ManagementUserProfile';
import { managementUserDataResponse } from '@/types/managementProfile';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

interface Props {
  managementItems: managementUserDataResponse;
}

const ManagementContainer = ({ managementItems }: Props) => {
  return (
    <>
      <Header title='마이페이지' hasPrevious />
      <main className={styles.managementWrapper}>
        <div className={styles.managementProfile}>
          <ManagementUserProfile managementItems={managementItems} />
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
        <NavBar clickedIndex={3} />
      </main>
    </>
  );
};

export default ManagementContainer;
