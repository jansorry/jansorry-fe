'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
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

  useEffect(() => {
    if (animationFinished && receiptSeq) {
      router.push(`/myreceipt/${receiptSeq}`);
    }
  }, [animationFinished, receiptSeq]);

  useEffect(() => {
    const getDataAndCreateReceipt = async () => {
      setAnimationFinished(false);
      const data = await getNagStatistic();
      const receiptInfo = createReceiptObject(data);
      const seq = await createReceipt(receiptInfo);
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
