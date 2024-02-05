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

const createQueryStringUsingURL = (params: {
  [x: string]: string | number | boolean;
}) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value.toString());
  });
  return searchParams.toString();
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
  //   총합 계산
  const total = calculateTotal(response);

  // nagId : count Map 생성
  const nagCountMap = createNagMap(response);

  const addQueryStringToURL = (
    baseUrl: string,
    params: { [x: string]: string | number | boolean },
  ) => {
    const url = new URL(baseUrl);
    const queryString = createQueryStringUsingURL(params);
    url.search = queryString;
    return url.toString();
  };

  const familyUrlBase = `http://janssory.com/sharereceipt/family`;
  const friendUrlBase = `http://janssory.com/sharereceipt/friend`;

  const familyUrl = addQueryStringToURL(familyUrlBase, nagCountMap);
  const friendUrl = addQueryStringToURL(friendUrlBase, nagCountMap);

  const postData: receiptResponse = {
    title: null,
    description: null,
    message: null,
    familyUrl,
    friendUrl,
    totalPrice: total,
    createdAt: null,
  };
  console.log(postData);
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
