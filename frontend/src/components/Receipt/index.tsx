import Image from 'next/image';

import { receiptContent } from '@/types/receipt';

import {
  receiptContentWrapper,
  receiptTop,
  receiptTopAndBottomBg,
  receiptWrapper,
  tempC,
  tempPadding,
  text16,
  textNTemp,
  textPTemp,
  textTemp,
} from '@/components/Receipt/index.css';

interface Props {
  content: receiptContent;
}

export const Receipt = ({ content }: Props) => {
  return (
    <div className={receiptWrapper}>
      <div className={receiptTopAndBottomBg}>
        <Image
          src='/images/receipt/receipt-top.png'
          fill
          object-fit='cover'
          alt='receipt-top'
        />
      </div>
      <div className={receiptContentWrapper}>
        <div className={tempC}>
          <div className={textNTemp}>영수증</div>
        </div>
        <div className={tempC}>
          <div className={text16}>{`발행일자 : ${content.date}`}</div>
        </div>
        <div className={tempPadding}>
          <div className={text16}>
            ----------------------------------------------
          </div>
        </div>

        <div className={tempC}>
          <div className={textTemp}>잔소리</div>
          <div className={textNTemp}>수량</div>
          <div className={textPTemp}>금액</div>
        </div>
        <div>----------------------------------------------</div>
        {content.data.map((item, index) => (
          <div key={item.nagId} className={tempC}>
            <div className={textTemp}>{item.content}</div>
            <div className={textNTemp}>{item.count}</div>
            <div className={textPTemp}>{item.price}</div>
          </div>
        ))}

        <div className={tempPadding}>
          <div>----------------------------------------------</div>
          <div className={tempC}>
            <div>총 개 수</div>
            <div>{content.totalCount}</div>
          </div>
          <div className={tempC}>
            <div>합 계</div>
            <div>{content.totalPrice}</div>
          </div>
          <div>----------------------------------------------</div>
          <div>큐알</div>
          <div>잔소리 홈 영수증</div>
          <div>----------------------------------------------</div>
        </div>
        <Image
          src='/images/receipt/receiptPaperBright-2.png'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
        />
      </div>
      <div className={receiptTopAndBottomBg}>
        <Image
          src='/images/receipt/receipt-bottom.png'
          fill
          object-fit='cover'
          alt='receipt-top'
        />
      </div>

      {/* <ReceiptBackground height='1200px' />;<div>영수증</div> */}
    </div>
  );
};
