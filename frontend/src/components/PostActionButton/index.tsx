'use client';

import { useRouter } from 'next/navigation';

import { IconPlus } from '#/svgs';

import * as styles from './index.css';

const PostActionButton = () => {
  const router = useRouter();
  const handleButtonClicked = () => {
    router.push('/category');
  };

  return (
    <button
      type='button'
      className={styles.floatButton}
      onClick={handleButtonClicked}
    >
      <IconPlus />
    </button>
  );
};

export default PostActionButton;
