import Image from 'next/image';

import { receiptContent } from '@/types/receipt';

import { ReceiptBackground } from '@/components/Receipt/ReceiptBackground';
import {
  tempC,
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
      <div className={tempPadding}>
        <div className={text16}>발행일자 : 000000000000</div>
        <div>------------------------------------------------</div>
        <div className={tempC}>
          <div className={textTemp}>잔소리</div>
          <div className={textNTemp}>수량</div>
          <div className={textPTemp}>금액</div>
        </div>
        <div>------------------------------------------------</div>
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
          <div className={textPTemp}> 100,000</div>
        </div>

        <div>------------------------------------------------</div>
        <div className={tempC}>
          <div>총 개 수</div>
          <div>102</div>
        </div>
        <div className={tempC}>
          <div>합 계</div>
          <div>10000000000</div>
        </div>
        <div>------------------------------------------------</div>
        <div>큐알</div>
        <div>잔소리 홈 영수증</div>
        <div>------------------------------------------------</div>
      </div>
      <ReceiptBackground height='1200px' />;<div>영수증</div>
    </div>
  );
};
