import Image from 'next/image';

import { receiptContent } from '@/types/receipt';
import { formatNumberAsCurrency } from '@/utils/drawReceipt';

import * as style from '@/components/Receipt/index.css';

interface Props {
  content: receiptContent;
}

export const Receipt = ({ content }: Props) => {
  const receiptStyle = content.type;
  return (
    <div className={style.receiptWrapper}>
      <div className={style.receiptTopAndBottomBg}>
        <Image
          src='/images/receipt/receipt-top.webp'
          fill
          object-fit='cover'
          alt='receipt-top'
        />
      </div>
      <div className={style.receiptContentWrapper}>
        <div className={style.receiptTextWrapper}>
          <div className={style.receipt}>
            <div
              className={style.receiptTextStyle({
                target: receiptStyle,
                contentType: 'title',
              })}
            >
              영수증
            </div>
          </div>

          <div className={style.receiptRowBox({ align: 'left' })}>
            <div
              className={style.receiptTextStyle({
                target: receiptStyle,
                contentType: 'content',
              })}
            >{`발행일자 : ${content.date}`}</div>
          </div>

          <div className={style.receiptTextStyle({ contentType: 'line' })}>
            -------------------------------------------
          </div>

          <div className={style.RowBoxWrapper}>
            <div className={style.receiptRowBox({ entry: 'nag' })}>
              <div
                className={style.receiptTextStyle({
                  target: receiptStyle,
                  contentType: 'content',
                })}
              >
                잔소리
              </div>
            </div>
            <div
              className={style.receiptRowBox({
                entry: 'quantity',
                align: 'right',
              })}
            >
              <div
                className={style.receiptTextStyle({
                  target: receiptStyle,
                  contentType: 'content',
                })}
              >
                수량
              </div>
            </div>
            <div
              className={style.receiptRowBox({
                entry: 'unitPrice',
                align: 'right',
              })}
            >
              <div
                className={style.receiptTextStyle({
                  target: receiptStyle,
                  contentType: 'content',
                })}
              >
                금액
              </div>
            </div>
          </div>
          <div className={style.receiptTextStyle({ contentType: 'line' })}>
            -------------------------------------------
          </div>
          {content.data.map((item) => (
            <div
              key={`${item.nagId}-${item.count}`}
              className={style.RowBoxWrapper}
            >
              <div className={style.receiptRowBox({ entry: 'nag' })}>
                <div
                  className={style.receiptTextStyle({
                    target: receiptStyle,
                    contentType: 'content',
                  })}
                >
                  {item.content}
                </div>
              </div>
              <div
                className={style.receiptRowBox({
                  entry: 'quantity',
                  align: 'right',
                })}
              >
                <div
                  className={style.receiptTextStyle({
                    target: receiptStyle,
                    contentType: 'content',
                  })}
                >
                  {item.count}
                </div>
              </div>
              <div
                className={style.receiptRowBox({
                  entry: 'unitPrice',
                  align: 'right',
                })}
              >
                <div
                  className={style.receiptTextStyle({
                    target: receiptStyle,
                    contentType: 'content',
                  })}
                >
                  {formatNumberAsCurrency(item.price)}
                </div>
              </div>
            </div>
          ))}

          <div className={style.receiptTextStyle({ contentType: 'line' })}>
            -------------------------------------------
          </div>

          <div className={style.RowBoxWrapper}>
            <div
              className={style.receiptTextStyle({
                target: receiptStyle,
                contentType: 'content',
              })}
            >
              총 개 수
            </div>
            <div
              className={style.receiptTextStyle({
                target: receiptStyle,
                contentType: 'content',
              })}
            >
              {content.totalCount}
            </div>
          </div>
          <div className={style.RowBoxWrapper}>
            <div
              className={style.receiptTextStyle({
                target: receiptStyle,
                contentType: 'content',
              })}
            >
              합 계
            </div>
            <div
              className={style.receiptTextStyle({
                target: receiptStyle,
                contentType: 'content',
              })}
            >
              {formatNumberAsCurrency(content.totalPrice)}
            </div>
          </div>
          <div className={style.receiptTextStyle({ contentType: 'line' })}>
            -------------------------------------------
          </div>
          <div className={style.qrcodeWrapper}>
            <Image
              src='/images/receipt/jansorryQR.webp'
              fill
              object-fit='cover'
              alt='임시큐알위치'
              sizes='90px'
            />
          </div>
          <div
            className={style.receiptTextStyle({
              target: receiptStyle,
              contentType: 'content',
            })}
          >
            https://jansorry.com/
          </div>
          <div className={style.receiptTextStyle({ contentType: 'line' })}>
            -------------------------------------------
          </div>
        </div>

        <Image
          src='/images/receipt/receiptPaperBright-2.webp'
          fill
          object-fit='cover'
          alt='영수증 뒷배경'
        />
      </div>
      <div className={style.receiptTopAndBottomBg}>
        <Image
          src='/images/receipt/receipt-bottom.webp'
          fill
          object-fit='cover'
          alt='receipt-top'
        />
      </div>
    </div>
  );
};
