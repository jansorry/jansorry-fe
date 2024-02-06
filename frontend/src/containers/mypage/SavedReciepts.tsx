'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { totalReceiptCountResponse } from '@/types/receipt';

interface Props {
  totalReceiptCount: totalReceiptCountResponse;
}

export const SavedReceipts = ({ totalReceiptCount }: Props) => {
  const router = useRouter();

  const receipts = Array.from({ length: totalReceiptCount }, (_, i) => (
    <div
      key={i}
      className={styles.savedReceiptsFrame}
      onClick={() => router.push(`/receipts/${i + 1}`)}
    />
  ));

  return <div className={styles.savedReceiptsContainer}>{receipts}</div>;
};
