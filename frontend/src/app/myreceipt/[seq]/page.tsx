import { getReceipts } from '@/services/receipt';
import MyReceipt from '@/containers/myreceipt';
import {
  makeReceiptContent,
  stringUrlToReceiptData,
} from '@/utils/makeReceipt';
import { getNagCategory } from '@/services/nag';
import { tempReceiptContent } from '@/containers/myreceipt/tempReceipData';

interface Props {
  params: { seq: 0 | 1 | 2 };
}

const MyReceiptPage = async ({ params }: Props) => {
  //  TODO myreceipt Cnt와 seq가 맞지 않을 경우에 대한 예외처리 필요할 것 같아요
  const { seq } = params;

  //  TODO 여기 api 활성화
  // //  기본 api 호출
  // const [data, allNags] = await Promise.all([
  //   getReceipts(seq),
  //   getNagCategory(),
  // ]);
  // // //  url 분해 작업
  // const receiptItems = stringUrlToReceiptData(data.friendUrl);
  //
  // //   TODO 받은 url을 페이지 구성용 data로 변환
  // const dataToReceiptContent = makeReceiptContent(receiptItems, allNags, data);
  const dataToReceiptContent = tempReceiptContent;
  return <MyReceipt data={dataToReceiptContent} seq={seq} />;
};
export default MyReceiptPage;
