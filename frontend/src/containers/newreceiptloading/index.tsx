'use client';

import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';

import { animationFinishedState } from '@/containers/newreceiptloading/store';
import { defaultWrapper } from '@/styles/common.css';
import CreateLoading from '@/containers/newreceiptloading/createloading';
import { createReceipt, getNagStatistic } from '@/services/receipt';
import { createReceiptObject } from '@/utils/makeReceipt';

const CreateReceipt = () => {
  const router = useRouter();
  const [animationFinished, setAnimationFinished] = useRecoilState(
    animationFinishedState,
  );
  const [receiptSeq, setReceiptSeq] = useState(1);

  //  생성한 영수증 페이지로 이동하는 로직
  useEffect(() => {
    if (animationFinished && receiptSeq) {
      router.push(`/myreceipt/${receiptSeq}`);
    }
  }, [animationFinished, receiptSeq]);

  useEffect(() => {
    const getDataAndCreateReceipt = async () => {
      const data = await getNagStatistic();
      const receiptInfo = createReceiptObject(data);
      const seq = await createReceipt(receiptInfo);
      console.log(receiptInfo);
      setReceiptSeq(seq);
    };

    getDataAndCreateReceipt();
  }, []);

  return (
    <main className={defaultWrapper({ width: 'max', height: 'auto' })}>
      {!animationFinished && <CreateLoading />}
    </main>
  );
};

export default CreateReceipt;
