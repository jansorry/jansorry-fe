'use client';

import { useRouter } from 'next/navigation';

import { IconArrowLeft } from '#/svgs';

import * as styles from './index.css';

interface Props {
  title: string;
  hasPrevious?: boolean;
}

const Header = ({ title, hasPrevious }: Props) => {
  const router = useRouter();

  return (
    <nav className={styles.headerWrapper}>
      {hasPrevious ? (
        <button type='button' className={styles.previousButton} onClick={() => router.back()}>
          <IconArrowLeft />
        </button>
      ) : (
        <div />
      )}
      <div className={styles.title}>{title}</div>
    </nav>
  );
};

export default Header;
