'use client';

import { receiptContent } from '@/types/receipt';

import { Receipt } from '@/components/Receipt';

interface Props {
  content: receiptContent;
}

const SharedReceipt = ({ content }: Props) => {
  console.log(content);
  return (
    <div>
      {content.date ? <Receipt content={content} /> : <div>오류입니다</div>}
    </div>
  );
};

export default SharedReceipt;
