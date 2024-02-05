import * as url from 'url';

import { getAllNags, getReceipts } from '@/services/receipt';
import MyReceipt from '@/containers/myreceipt';
import { tempReceiptContent } from '@/containers/myreceipt/tempReceipData';
import {
  makeShareUrl,
  parsingReceiptContent,
  parsingReceiptDataArray,
} from '@/utils/drawReceipt';

interface Props {
  params: { seq: 0 | 1 | 2 };
}

const MyReceiptPage = async ({ params }: Props) => {
  //  TODO myreceipt Cnt와 seq가 맞지 않을 경우에 대한 예외처리 필요할 것 같아요
  const { seq } = params;

  //  TODO 여기 api 활성화
  //  기본 api 호출
  const [receiptInfo, allNagsArray] = await Promise.all([
    getReceipts(seq),
    getAllNags(),
  ]);

  const familyUrlForOpenGraph = makeShareUrl(
    receiptInfo.familyUrl,
    receiptInfo,
  );
  const friendUrlForOpenGraph = makeShareUrl(
    receiptInfo.friendUrl,
    receiptInfo,
  );

  const urlObj = new URL(friendUrlForOpenGraph);
  const urlParamsObject: { [key: string]: string } = {};

  urlObj.searchParams.forEach((value, key) => {
    urlParamsObject[key] = value;
  });
  const dataArray = parsingReceiptDataArray({
    urlParams: urlParamsObject,
    categoryArray: allNagsArray,
  });

  const receiptContent = parsingReceiptContent(
    'friend',
    dataArray,
    urlParamsObject,
  );

  return (
    <MyReceipt
      data={receiptContent}
      seq={seq}
      familyUrlForOpenGraph={familyUrlForOpenGraph}
      friendUrlForOpenGraph={friendUrlForOpenGraph}
    />
  );
};
export default MyReceiptPage;
