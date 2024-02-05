//  url 객체 & 카테고리 리스트 받아서 receiptData 배열 구성하기
import { receiptContent, receiptData, receiptResponse } from '@/types/receipt';
import { nag, nagTotalResponse } from '@/types/nag';

export const parsingReceiptDataArray = ({
  urlParams,
  categoryArray,
}: {
  urlParams: { [key: string]: string };
  categoryArray: nag[]; // Nag 타입으로 가정
}): receiptData[] => {
  const dataArray: receiptData[] = [];

  Object.entries(urlParams).forEach(([key, value]) => {
    if (/^\d+$/.test(key)) {
      // 키가 숫자로만 구성된 경우
      const index = parseInt(key, 10); // key를 숫자로 변환
      const categoryItem = categoryArray.find((item) => item.nagId === index); // categoryArray에서 해당 nagId를 찾음

      if (categoryItem) {
        dataArray.push({
          nagId: index,
          count: parseInt(value, 10),
          content: categoryItem.content,
          price: categoryItem.price.toString(), // 가정: price가 문자열로 변환되어야 함
        });
      }
    }
  });

  return dataArray;
};

// url 객체에서 nag관련 데이터 제외해서 receiptCotent에 할당하기 => 이걸로 Receipt 생성
export const parsingReceiptContent = (
  type: 'family' | 'friend',
  dataArray: receiptData[],
  urlParams: { [key: string]: string },
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

//  ---------------------------- 여기까지 sharereceipt에서 사용

export const makeShareUrl = (baseurl: string, receiptInfo: receiptResponse) => {
  const urlObj = new URL(baseurl);
  const { title, description, message, createdAt } = receiptInfo;
  if (title) urlObj.searchParams.set('title', title);
  if (description) urlObj.searchParams.set('description', description);
  if (message) urlObj.searchParams.set('message', message);
  if (createdAt) urlObj.searchParams.set('date', createdAt);

  return urlObj.toString();
};

//  -------------------- url
