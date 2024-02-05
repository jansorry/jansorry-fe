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
    nagId: 5,
    content: '애 가질 때 되지 않았니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 6,
    content: '눈만 낮추면 갈 데가 얼마나 많은데',
    price: 10000,
    count: 2,
  },
  {
    nagId: 7,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 8,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 9,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 10,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 11,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 12,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 13,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 14,
    content: '아직도 아이돌 따라다니니?',
    price: 10000,
    count: 2,
  },
  {
    nagId: 15,
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
  familyUrl: 'http://janssory.com/sharereceipt/family?1=10&2=10&3=10&4=10',
  friendUrl: 'http://janssory.com/sharereceipt/friend?1=10&2=10&3=10&4=10',
  totalCount: 30,
  totalPrice: 1900000000000,
};

export const tempNagStatisticResponse = {
  data: [
    {
      nagId: 1,
      content: '잔잔',
      price: 3000,
      count: 10,
    },
    {
      nagId: 2,
      content: '잔잔',
      price: 3000,
      count: 10,
    },
    {
      nagId: 3,
      content: '잔잔',
      price: 3000,
      count: 10,
    },
    {
      nagId: 4,
      content: '잔잔',
      price: 3000,
      count: 10,
    },
  ],
};
