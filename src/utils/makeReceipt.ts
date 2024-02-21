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
  response.nagStatisticDtos.forEach((item) => {
    paramsObj[item.nagId] = item.count;
  });
  return paramsObj;
};

export const createReceiptObject = (
  response: nagStatisticResponse,
): receiptResponse => {
  const { maxCountedNagId, totalPrice, totalCount } = response;
  // nagId : count Map 생성
  const nagCountMap = createNagMap(response);

  const addQueryStringToURL = (
    baseUrl: string,
    params: Record<string, string | number | boolean>,
  ) => {
    const url = new URL(baseUrl);
    url.search = createQueryStringUsingURL(params);
    return url.toString();
  };

  const familyUrlBase = `https://jansorry.com/sharereceipt/family`;
  const friendUrlBase = `https://jansorry.com/sharereceipt/friend`;

  const familyUrl = addQueryStringToURL(familyUrlBase, nagCountMap);
  const friendUrl = addQueryStringToURL(friendUrlBase, nagCountMap);

  return {
    maxCountedNagId,
    totalPrice,
    totalCount,
    familyUrl,
    friendUrl,
  };
};

export const copyLink = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url);
  } catch (err) {
    console.log(err);
  }
};
