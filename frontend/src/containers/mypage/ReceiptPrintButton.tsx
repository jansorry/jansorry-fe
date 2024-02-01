import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { actionTotalCount } from '@/types/userData';

interface Props {
  nagTotalCount: actionTotalCount;
}

const ReceiptPrintButton = ({ nagTotalCount }: Props) => {
  const nagCount = nagTotalCount.content.length;
  const router = useRouter();

  const handleReceiptPrint = () => {
    // receiptprint 는 영수증 페이지 만들어지면 수정하기
    router.push('/receiptprint');
  };

  return [];
};

export default ReceiptPrintButton;
