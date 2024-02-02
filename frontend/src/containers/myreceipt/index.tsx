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

import { Receipt } from '@/components/Receipt';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';

interface Props {
  data: receiptContent;
}
const MyReceipt = ({ data }: Props) => {
  //  TODO 임시 데이터 삭제하고 실제 데이터 연결
  const tempData = tempReceiptContent;
  return (
    <main className={fullWrapper}>
      <Header title='영수증 출력' hasPrevious />
      <div className={receiptWrapper}>
        <div className={myReceiptWrapper}>
          <div className={receiptShadow}>
            {/* TODO 임시 데이터 삭제하고 실제 데이터 연결  */}
            <Receipt content={tempData} />
          </div>
          <div className={buttonsWrapper}>
            <div className={myreceiptButtonWrapper}>
              <Button type='button' size='large' colorStyle='blue' filled>
                공유하기
              </Button>
            </div>
            <div className={myreceiptButtonWrapper}>
              <Button type='button' size='large' colorStyle='strongRed' filled>
                삭제하기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </main>
  );
};

export default MyReceipt;
