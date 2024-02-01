import Image from 'next/image';

import { receiptContent } from '@/types/receipt';

import { ReceiptBackground } from '@/components/Receipt/ReceiptBackground';
import {
  receiptTop,
  tempC,
  tempForImg,
  tempPadding,
  tempRelative,
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
    <div className={tempRelative}>
      <div className={receiptTop}>
        <Image
          src='/images/receipt/topTriangle3000.png'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
          className={tempForImg}
        />
      </div>
      <div className={tempPadding}>
        <div className={tempC}>
          <div className={textNTemp}>영수증</div>
        </div>
        <div className={tempC}>
          <div className={text16}>발행일자 : 000000000000</div>
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
        <div className={tempC}>
          <div className={textTemp}>
            내가 자식 집에 오는데 허락을 맡아야 되니?
          </div>
          <div className={textNTemp}> 99</div>
          <div className={textPTemp}> 100,000</div>
        </div>
        <div className={tempC}>
          <div className={textTemp}>
            내가 자식 집에 오는데 허락을 맡아야 되니?
          </div>
          <div className={textNTemp}> 99</div>
          <div className={textPTemp}> 100,000</div>
        </div>
        <div className={tempC}>
          <div className={textTemp}>
            내가 자식 집에 오는데 허락을 맡아야 되니?
          </div>
          <div className={textNTemp}> 99</div>
          <div className={textPTemp}> 100,000</div>
        </div>
        <div className={tempC}>
          <div className={textTemp}>
            내가 자식 집에 오는데 허락을 맡아야 되니?
          </div>
          <div className={textNTemp}> 99</div>
          <div className={textPTemp}> 100,000</div>
        </div>
        <div className={tempC}>
          <div className={textTemp}>
            내가 자식 집에 오는데 허락을 맡아야 되니?
          </div>
          <div className={textNTemp}> 99</div>
          <div className={textPTemp}> 10,000</div>
        </div>

        <div>----------------------------------------------</div>
        <div className={tempC}>
          <div>총 개 수</div>
          <div>102</div>
        </div>
        <div className={tempC}>
          <div>합 계</div>
          <div>10,000,000,000</div>
        </div>
        <div>----------------------------------------------</div>
        <div>큐알</div>
        <div>잔소리 홈 영수증</div>
        <div>----------------------------------------------</div>
        <Image
          src='/images/receipt/receiptPaperBright-2.png'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
          className={tempForImg}
        />
      </div>

      {/* <ReceiptBackground height='1200px' />;<div>영수증</div> */}
    </div>
  );
};
