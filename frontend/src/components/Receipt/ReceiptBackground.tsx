import Image from 'next/image';

import { receiptBg, receiptBg2, receiptTop, tempForImg } from '@/components/Receipt/index.css';

export const ReceiptBackground = () => {
  return (
    <div>
      <div className={receiptTop}>
        <Image
          src='/images/receipt/topTriangle3000.png'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
          className={tempForImg}
        />
      </div>
      <div className={receiptBg}>
        <Image
          src='/images/receipt/receiptPaperBright-2.png'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
          className={tempForImg}
        />
      </div>
      <div className={receiptTop}>
        <Image
          src='/images/receipt/bottomTriangle3000.png'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
          className={tempForImg}
        />
      </div>
    </div>
  );
};
