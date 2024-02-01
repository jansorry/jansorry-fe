'use client';

import { useRecoilValue } from 'recoil';

import Loading from '@/containers/myreceipt/Loading';
import { animationFinishedState } from '@/containers/myreceipt/receiptAnimation';
import { defaultWrapper } from '@/styles/common.css';

const Receipt = () => {
  const animationFinished = useRecoilValue(animationFinishedState);

  return (
    <main className={defaultWrapper({ width: 'max', height: 'auto' })}>
      {animationFinished ? (
        <div>{/* <ReceiptBackground /> */}</div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Receipt;
