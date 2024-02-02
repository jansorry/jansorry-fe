import { getReceipts } from '@/services/receipt';
import MyReceipt from '@/containers/myreceipt';
import { tempReceiptContent } from '@/containers/myreceipt/tempReceipData';

interface Props {
  params: { seq: 0 | 1 | 2 };
}

const MyReceiptPage = ({ params }: Props) => {
  //  TODO myreceipt Cnt와 seq가 맞지 않을 경우에 대한 예외처리 필요할 것 같아요
  const { seq } = params;
  // const data = await getReceipts(seq);
  //   TODO 받은 url을 페이지 구성용 data로 변환
  const dataToReceiptContent = tempReceiptContent;
  return <MyReceipt data={dataToReceiptContent} seq={seq} />;
};
export default MyReceiptPage;
