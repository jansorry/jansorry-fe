'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { IconSavedReceipt } from '#/svgs';
import createCounter from '@/utils/counter';
import { getReceiptCount } from '@/services/receipt';

interface Props {
  initialReceiptCount: number;
}

const SavedReceipts = ({ initialReceiptCount }: Props) => {
  const [receiptCount, setReceiptCount] = useState<number>(initialReceiptCount);

  const router = useRouter();
  const getReceiptKey = createCounter();

  useEffect(() => {
    const fetchReceiptCount = async () => {
      const count = await getReceiptCount();
      setReceiptCount(count);
    };

    fetchReceiptCount();
  }, []);

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
