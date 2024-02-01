import { receiptContent, receiptData } from '@/types/receipt';

const tempReceiptData: receiptData[] = [
  {
    nagId: 1,
    content: '공부도 못하는데 집안일은 네가 해야지',
    price: '100,000',
    count: 99,
  },
  {
    nagId: 2,
    content: 'ㅇㅇ는 회사에서 승진했다던데 넌 언제해?',
    price: 30000,
    count: 4,
  },
  {
    nagId: 4,
    content: 'ㅇㅇ이는 주식으로 몇 천만원 벌었다던데.',
    price: 90000,
    count: 1,
  },
  {
    nagId: 125,
    content: '애 가질 때 되지 않았니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '눈만 낮추면 갈 데가 얼마나 많은데',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 27,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
];
export const tempReceiptContent: receiptContent = {
  type: 'adult',
  title: '00님의 영수증!',
  description: '돈 벌기 쉽지 않아요~!',
  message: '돈 벌기 쉽지 않아요~!',
  date: '202402011218',
  data: tempReceiptData,
  totalCount: 30,
  totalPrice: 1900000000000,
};
