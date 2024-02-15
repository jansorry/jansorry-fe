import { cookies } from 'next/headers';

import MyReceipt from '@/containers/myreceipt';
import {
  makeShareUrl,
  parsingReceiptContent,
  parsingReceiptDataArray,
} from '@/utils/drawReceipt';
import { getAllNags, getReceipts } from '@/services/receipt';

export const dynamic = 'force-dynamic';

interface Props {
  params: { seq: 1 | 2 | 3 };
}

const MyReceiptPage = async ({ params }: Props) => {
  const { seq } = params;
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const [receiptInfo, allNagsArray] = await Promise.all([
    getReceipts(seq, refreshToken),
    getAllNags(refreshToken),
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
