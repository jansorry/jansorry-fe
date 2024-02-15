'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

import { receiptContent } from '@/types/receipt';
import * as styles from '@/containers/myreceipt/index.css';
import { deleteReceipt } from '@/services/receipt';
import useModal from '@/hooks/useModal';
import { SharingButtons } from '@/containers/myreceipt/SharingButtons';

import { Receipt } from '@/components/Receipt';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';

interface Props {
  data: receiptContent;
  seq: number;
  familyUrlForOpenGraph: string;
  friendUrlForOpenGraph: string;
}
const MyReceipt = ({
  data,
  seq,
  familyUrlForOpenGraph,
  friendUrlForOpenGraph,
}: Props) => {
  const { Modal, openModal } = useModal();
  const router = useRouter();
  const deleteReceiptEvent = () => {
    deleteReceipt(seq);
    router.push('/mypage');
  };
  const receiptRef = useRef(null);
  const saveImageEvent = () => {
    const receiptComponent = receiptRef.current;

    if (!receiptComponent) {
      console.log('저장에 실패했습니다!');
      return;
    }

    html2canvas(receiptComponent).then((canvas) => {
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = canvas.toDataURL('image/png');
      link.download = 'result.png';
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <main className={styles.fullWrapper}>
      <Header title='영수증 출력' />
      <div className={styles.receiptWrapper}>
        <div className={styles.myReceiptWrapper}>
          <div className={styles.receiptShadow}>
            {/* TODO : 영수증 이미지 외부 안잘리게 하기 */}
            <div ref={receiptRef}>
              <Receipt content={data} />
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <div className={styles.myreceiptButtonWrapper}>
              <Button
                onClick={openModal}
                type='button'
                size='large'
                colorStyle='blue'
                filled
              >
                공유하기
              </Button>
            </div>
            <div className={styles.myreceiptButtonWrapper}>
              <Button
                onClick={deleteReceiptEvent}
                type='button'
                size='large'
                colorStyle='strongRed'
                filled
              >
                삭제하기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <NavBar />

      <Modal title='어떻게 공유할까요?'>
        <SharingButtons
          saveImageEvent={saveImageEvent}
          familyUrl={familyUrlForOpenGraph}
          friendUrl={friendUrlForOpenGraph}
        />
      </Modal>
    </main>
  );
};

export default MyReceipt;
