import type { Metadata } from 'next';
import SharedReceipt from '@/containers/sharereceipt';
import { getAllNags } from '@/services/receipt';
import {
  parsingReceiptContent,
  parsingReceiptDataArray,
} from '@/utils/drawReceipt';

interface metaProps {
  params: { target: 'family' | 'friend' };
  searchParams: { [key: string]: string };
}

//  동적 오픈그래프 생성 및 설정
export const generateMetadata = ({
  params,
  searchParams,
}: metaProps): Metadata => {
  const id = params.target;
  const { description, title, message } = searchParams;

  return {
    openGraph: {
      title,
      description,
    },
  };
};

const ShareReceipt = async ({ params, searchParams }: metaProps) => {
  //  전체 잔소리 배열api호출
  const allNagsArray = await getAllNags();

  //  잔소리 배열 + url 상의 잔소리 내역
  const dataArray = parsingReceiptDataArray({
    urlParams: searchParams,
    categoryArray: allNagsArray,
  });

  //  잔소리 영수증에 필요한 Content로 재구성
  const receiptContent = parsingReceiptContent(
    params.target,
    dataArray,
    searchParams,
  );

  return (
    <div>
      <SharedReceipt content={receiptContent} />
    </div>
  );
};

export default ShareReceipt;
