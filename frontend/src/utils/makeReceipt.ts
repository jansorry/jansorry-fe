import {
  nagStatisticResponse,
  receiptContent,
  receiptData,
  receiptResponse,
} from '@/types/receipt';
import { nag, nagTotalResponse } from '@/types/nag';

//   총계 계산
const calculateTotal = (response: nagStatisticResponse) => {
  const total = response.data.reduce(
    (acc, item) => acc + item.price * item.count,
    0,
  );
  return total;
};

const createQueryString = (params: {
  [x: string]: string | number | boolean;
  [x: number]: number;
}) => {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join('&');
};
const createNagMap = (
  response: nagStatisticResponse,
): { [p: number]: number } => {
  const paramsObj: { [key: number]: number } = {};
  response.data.forEach((item) => {
    paramsObj[item.nagId] = item.count;
  });
  return paramsObj;
};

export const createReceiptObject = (
  response: nagStatisticResponse,
): receiptResponse => {
  const total = calculateTotal(response);
  const nagCountMap = createNagMap(response);
  const queryString = createQueryString(nagCountMap);
  const familyUrl = `http://janssory.com/sharereceipt/family/${queryString}`;
  const friendUrl = `http://janssory.com/sharereceipt/friend/${queryString}`;
  const postData: receiptResponse = {
    title: '',
    description: '',
    message: '',
    familyUrl,
    friendUrl,
    totalPrice: total,
  };
  return postData;
};

export const stringUrlToReceiptData = (url: string): receiptData[] => {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);

  const receiptItems = Array.from(params.entries()).map(([key, value]) => ({
    nagId: Number(key),
    content: null,
    price: null,
    count: Number(value),
  }));

  console.log(receiptItems);
  return receiptItems;
};

const assignReceiptData = (
  receiptDataArray: receiptData[],
  nagsArray: nagTotalResponse[],
): receiptData[] => {
  return receiptDataArray.map((receiptDataItem) => {
    const allNags = nagsArray.reduce<nag[]>(
      (acc, cur) => [...acc, ...cur.nags],
      [],
    );

    const matchingNag = allNags.find(
      (nagItem) => nagItem.nagId === receiptDataItem.nagId,
    );

    if (matchingNag) {
      return {
        ...receiptDataItem,
        content: matchingNag.content,
        price: matchingNag.price,
      };
    }
    return receiptDataItem;
  });
};

const getTotalCount = (receiptItems: receiptData[]): number => {
  return receiptItems.reduce(
    (total, receiptItem) => total + receiptItem.count,
    0,
  );
};

export const makeReceiptContent = (
  receiptItems: receiptData[],
  nagsArray: nagTotalResponse[],
  data: receiptResponse,
): receiptContent => {
  const type = 'normal';
  const {
    title,
    description,
    message,
    date = '00000000',
    totalPrice,
    familyUrl,
    friendUrl,
  } = data;

  const totalCount = getTotalCount(receiptItems);

  const makeReceiptData = assignReceiptData(receiptItems, nagsArray);

  const content: receiptContent = {
    type,
    title,
    description,
    message,
    date,
    totalPrice,
    familyUrl,
    friendUrl,
    totalCount,
    data: makeReceiptData,
  };

  console.log(content);
  return content;
};

export const makeUrlForSharing = (
  url: string,
  title: string,
  description: string,
  message: string,
  date: string,
) => {
  // URL 객체를 생성합니다.
  const urlObj = new URL(url);

  const params = new URLSearchParams(urlObj.search);

  if (title) params.set('title', title);
  if (description) params.set('description', description);
  if (message) params.set('message', message);

  urlObj.search = params.toString();

  console.log(urlObj.toString());
  return urlObj.toString();
};

export const makeContentForSharing = (url: string) => {};

export const getQueryStringValues = (
  nagItems: nagTotalResponse[],
): receiptContent => {
  const currentUrl = window.location.href;
  const urlObj = new URL(currentUrl);
  const queryParams = new URLSearchParams(urlObj.search);

  let data: receiptData[] = [];
  let totalCount = 0;
  const totalPrice = 0;

  // 쿼리 파라미터를 순회하며 분류
  queryParams.forEach((value, key) => {
    if (/^\d+$/.test(key)) {
      // 키가 숫자로만 구성된 경우
      data.push({
        nagId: parseInt(key, 10),
        count: parseInt(value, 10),
        content: '',
        price: '',
      });
      totalCount += parseInt(value, 10);
    }
  });

  data = assignReceiptData(data, nagItems);

  const receipt: receiptContent = {
    type: 'normal', // 가정한 기본값
    title: queryParams.get('title') || '',
    description: queryParams.get('description') || '',
    message: queryParams.get('message') || '',
    date: queryParams.get('date') || '',
    data,
    familyUrl: '',
    friendUrl: '',
    totalCount,
    totalPrice,
  };

  return receipt;
};
