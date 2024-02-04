'use client';

import { receiptContent } from '@/types/receipt';
import { tempReceiptContent } from '@/containers/myreceipt/tempReceipData';
import {
  buttonsWrapper,
  fullWrapper,
  myreceiptButtonWrapper,
  myReceiptWrapper,
  receiptShadow,
  receiptWrapper,
} from '@/containers/myreceipt/index.css';
import { deleteReceipt } from '@/services/receipt';
import useModal from '@/hooks/useModal';
import { SharingButtons } from '@/containers/myreceipt/SharingButtons';
import { makeUrlForSharing } from '@/utils/makeReceipt';

import { Receipt } from '@/components/Receipt';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';

interface Props {
  data: receiptContent;
  seq: number;
}
const MyReceipt = ({ data, seq }: Props) => {
  const { Modal, openModal } = useModal();
  const shareReceiptEvent = () => {};
  const deleteReceiptEvent = () => {
    deleteReceipt(seq);
  };

  const familyUrlForOpenGraph = makeUrlForSharing(
    data.familyUrl,
    data.title,
    data.description,
    data.message,
    data.date,
  );
  const friendUrlForOpenGraph = makeUrlForSharing(
    data.familyUrl,
    data.title,
    data.description,
    data.message,
    data.date,
  );

  return (
    <main className={fullWrapper}>
      <Header title='영수증 출력' hasPrevious />
      <div className={receiptWrapper}>
        <div className={myReceiptWrapper}>
          <div className={receiptShadow}>
            <Receipt content={data} />
          </div>
          <div className={buttonsWrapper}>
            <div className={myreceiptButtonWrapper}>
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
            <div className={myreceiptButtonWrapper}>
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
          familyUrl={familyUrlForOpenGraph}
          friendUrl={friendUrlForOpenGraph}
        />
      </Modal>
    </main>
  );
};

export default MyReceipt;
