import { receiptContent, receiptData, receiptResponse } from '@/types/receipt';
import { nag, nagTotalResponse } from '@/types/nag';

export const parsingReceiptDataArray = ({
  urlParams,
  categoryArray,
}: {
  urlParams: Record<string, string>;
  categoryArray: nag[];
}): receiptData[] => {
  const dataArray: receiptData[] = [];

  Object.entries(urlParams).forEach(([key, value]) => {
    if (/^\d+$/.test(key)) {
      // 키가 숫자로만 구성된 경우
      const index = parseInt(key, 10);
      const categoryItem = categoryArray.find((item) => item.nagId === index); // categoryArray에서 해당 nagId를 찾음

      if (categoryItem) {
        dataArray.push({
          nagId: index,
          count: parseInt(value, 10),
          content: categoryItem.content,
          price: categoryItem.price,
        });
      }
    }
  });

  return dataArray;
};

export const parsingReceiptContent = (
  type: 'family' | 'friend',
  dataArray: receiptData[],
  urlParams: Record<string, string>,
) => {
  const receiptType = type;
  const { title, description, message, createdAt, totalPrice } = urlParams;
  const totalCount = dataArray.reduce((sum, item) => sum + item.count, 0);

  const receiptContentData: receiptContent = {
    type: receiptType,
    title,
    description,
    message,
    date: createdAt,
    totalCount,
    totalPrice: parseInt(totalPrice, 10),
    data: dataArray,
    familyUrl: '',
    friendUrl: '',
  };

  return receiptContentData;
};

//  카테고리 리스트 받아서 배열화하기 (옵션)
export const flattenNags = (responses: nagTotalResponse[]): nag[] => {
  return responses.reduce<nag[]>((acc, response) => {
    return acc.concat(response.nags);
  }, []);
};

export const makeShareUrl = (baseurl: string, receiptInfo: receiptResponse) => {
  const urlObj = new URL(baseurl);
  const { title, description, message, createdAt, totalPrice } = receiptInfo;
  if (title) urlObj.searchParams.set('title', title);
  if (description) urlObj.searchParams.set('description', description);
  //  message 현재는 미사용 But 추후 오픈그래프 수정 시 사용 가능
  //  if (message) urlObj.searchParams.set('message', message);
  if (createdAt) urlObj.searchParams.set('createdAt', createdAt);
  if (totalPrice) urlObj.searchParams.set('totalPrice', totalPrice.toString());

  return urlObj.toString();
};

export const formatNumberAsCurrency = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num);
};
