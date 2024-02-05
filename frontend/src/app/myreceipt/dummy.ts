export const dummyReceiptResponse = {
  maxCountedNagId: 1,
  title: '타이틀변경테스트',
  description: 'description',
  message: 'message',
  familyUrl: 'http://localhost:3000/sharereceipt/family?1=10&2=2&7=9&6=2',
  friendUrl: 'http://localhost:3000/sharereceipt/friend?1=10&2=2&7=9&6=2',
  totalPrice: 10000,
  createdAt: '202401021225',
};

export const dummyNagArray = [
  {
    nagId: 1,
    content: '1번잔소리',
    price: 20000,
  },
  {
    nagId: 2,
    content: '1번잔소리',
    price: 12300,
  },
  {
    nagId: 11,
    content: '11번잔소리',
    price: 15000,
  },
  {
    nagId: 6,
    content: '6번잔소리',
    price: 10000,
  },
  {
    nagId: 7,
    content: '7번잔소리',
    price: 10000,
  },
  {
    nagId: 10,
    content: '10번잔소리',
    price: 40000,
  },
];

// export interface receiptResponse {
//   title?: string;
//   description?: string;
//   message?: string;
//   familyUrl: string;
//   friendUrl: string;
//   totalPrice: number;
//   createdAt?: string;
// }
