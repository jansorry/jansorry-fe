'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { totalReceiptCountResponse } from '@/types/receipt';
import { IconSavedReceipt } from '#/svgs';

interface Props {
  totalReceiptCountProps: totalReceiptCountResponse;
}

const SavedReceipts: React.FC<Props> = ({ totalReceiptCountProps }) => {
  const router = useRouter();

  const receiptSpaces = Array(3)
    .fill(null)
    .map((_, index) => {
      const receiptKey = `receipt-${index}`;
      if (index < totalReceiptCountProps.receiptCount) {
        return (
          <button
            type='button'
            key={receiptKey}
            className={styles.savedReceiptFrame}
            onClick={() => router.push(`/receipts/${index + 1}`)}
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
