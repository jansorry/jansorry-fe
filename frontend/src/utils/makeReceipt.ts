import { nagStatisticResponse, receiptResponse } from '@/types/receipt';

const createQueryStringUsingURL = (
  params: Record<string, string | number | boolean>,
) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value.toString());
  });
  return searchParams.toString();
};
const createNagMap = (
  response: nagStatisticResponse,
): Record<number, number> => {
  const paramsObj: Record<number, number> = {};
  response.data.forEach((item) => {
    paramsObj[item.nagId] = item.count;
  });
  return paramsObj;
};

export const createReceiptObject = (
  response: nagStatisticResponse,
): receiptResponse => {
  const total = response.totalPrice;
  const count = response.totalCount;
  const { maxCountedNagId } = response;
  // nagId : count Map 생성
  const nagCountMap = createNagMap(response);

  const addQueryStringToURL = (
    baseUrl: string,
    params: Record<string, string | number | boolean>,
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
    maxCountedNagId,
    totalPrice: total,
    totalCount: count,
    familyUrl,
    friendUrl,
  };
  console.log(postData);
  return postData;
};
