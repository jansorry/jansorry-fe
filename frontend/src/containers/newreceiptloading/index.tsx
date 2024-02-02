import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { animationFinishedState } from '@/containers/newreceiptloading/receiptAnimation';
import { defaultWrapper } from '@/styles/common.css';
import CreateLoading from '@/containers/newreceiptloading/createloading';
import { createReceipt, getNagStatistic } from '@/services/receipt';

interface Props {
  seq: number;
}

const MyReceipt = ({ seq }: Props) => {
  const router = useRouter();
  const [animationFinished, setAnimationFinished] = useRecoilState(
    animationFinishedState,
  );

  useEffect(() => {
    const getDataAndCreateReceipt = async () => {
      try {
        const data = await getNagStatistic();

        //  TODO 영수증 데이터로 저장용 url 생성
        const receiptInfo = {};
        const dataToReceiptString;
        await createReceipt(receiptInfo);
      } catch (error) {
        console.error(error);
      }
    };

    if (animationFinished) {
      setAnimationFinished(false);
      router.push(`/myreceipt/${seq}`);
    }
  }, [animationFinished, router, seq]);

  return (
    <main className={defaultWrapper({ width: 'max', height: 'auto' })}>
      {!animationFinished && <CreateLoading />}
    </main>
  );
};

export default MyReceipt;
