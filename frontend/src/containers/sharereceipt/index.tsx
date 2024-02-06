'use client';

import { receiptContent } from '@/types/receipt';

import { Receipt } from '@/components/Receipt';
import { buttonsWrapper, fullWrapper, receiptWrapper, shareReceiptWrapper } from '@/containers/sharereceipt/index.css';
import Header from '@/components/Header';
import Button from '@/components/Button';

import  { useRouter } from 'next/navigation';

interface Props {
  content: receiptContent;
}

const SharedReceipt = ({ content }: Props) => {
  console.log(content);

  const router = useRouter();


  const onClick = () => {
    router.push(`/`);
  }

  return (
    <div className={fullWrapper}>
      <Header title='잔소리 영수증' />
      <div className={receiptWrapper}>

        <div className={shareReceiptWrapper}>
          <Receipt content={content}  />
<div className={buttonsWrapper}>
  <Button onClick={onClick} type='button' size='large' colorStyle='blue' filled>
    나도 영수증 만들러 가기
  </Button>
</div>
        </div>



      </div>

    </div>
  );
};

export default SharedReceipt;
