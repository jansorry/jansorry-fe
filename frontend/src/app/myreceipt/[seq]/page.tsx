import MyReceipt from '@/containers/myreceipt';
import {
  makeShareUrl,
  parsingReceiptContent,
  parsingReceiptDataArray,
} from '@/utils/drawReceipt';
import { getAllNags, getReceipts } from '@/services/receipt';

import { dummyNagArray, dummyReceiptResponse } from '@/app/myreceipt/dummy';

interface Props {
  params: { seq: 0 | 1 | 2 };
}

const MyReceiptPage = async ({ params }: Props) => {
  const { seq } = params;

  // api 받는 로직
  const [receiptInfo, allNagsArray] = await Promise.all([
    getReceipts(seq),
    getAllNags(),
  ]);

  // //  더미데이터
  // const receiptInfo = dummyReceiptResponse;
  // const allNagsArray = dummyNagArray;

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
