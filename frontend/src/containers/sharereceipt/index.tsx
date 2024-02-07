'use client';

import { useRouter } from 'next/navigation';

import { receiptContent } from '@/types/receipt';
import * as styles from '@/containers/sharereceipt/index.css';

import { Receipt } from '@/components/Receipt';
import Header from '@/components/Header';
import Button from '@/components/Button';

interface Props {
  content: receiptContent;
}

const SharedReceipt = ({ content }: Props) => {
  //  TODO : api 자료 확인 후 삭제
  console.log(content);

  const router = useRouter();

  const onClick = () => {
    router.push(`/`);
  };

  return (
    <div className={styles.fullWrapper}>
      <Header title='잔소리 영수증' />
      <div className={styles.receiptWrapper}>
        <div className={styles.shareReceiptWrapper}>
          <Receipt content={content} />

          <div className={styles.buttonsWrapper}>
            <Button
              onClick={onClick}
              type='button'
              size='large'
              colorStyle='blue'
              filled
            >
              나도 영수증 만들러 가기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedReceipt;
