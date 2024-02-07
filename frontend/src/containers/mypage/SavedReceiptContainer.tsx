'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { IconSavedReceipt } from '#/svgs';
import createCounter from '@/utils/counter';

interface Props {
  receiptCount: 0 | 1 | 2 | 3;
}

const SavedReceipts = ({ receiptCount }: Props) => {
  const router = useRouter();
  const getReceiptKey = createCounter();

  const receiptSpaces = [1, 2, 3].map((index) => {
    const receiptKey = getReceiptKey();
    if (index <= receiptCount) {
      return (
        <button
          type='button'
          key={receiptKey}
          className={styles.savedReceiptFrame}
          onClick={() => router.push(`/myreceipt/${index}`)}
        >
          <IconSavedReceipt />
        </button>
      );
    }
    return <div key={receiptKey} className={styles.noReceiptFrame} />;
  });

  return (
    <div className={styles.savedReceiptWrapper}>
      저장된 영수증
      <div className={styles.savedReceiptContainer}>{receiptSpaces}</div>
    </div>
  );
};
export default SavedReceipts;
