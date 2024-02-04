import { useEffect, useState } from 'react';

import {
  buttonStyleForSharing,
  doubleButtonWrapper,
  modalWrapper,
} from '@/containers/myreceipt/index.css';
import { makeUrlForSharing } from '@/utils/makeReceipt';

import Button from '@/components/Button';

interface Props {
  familyUrl: string;
  friendUrl: string;
}

export const SharingButtons = ({ familyUrl, friendUrl }: Props) => {
  const [isSelected, setIsSelected] = useState(true);

  const copyLink = async (family: boolean) => {
    try {
      const url = family ? familyUrl : friendUrl;
      await navigator.clipboard.writeText(url);
      console.log('링크가 클립보드에 복사되었습니다.');
      console.log(url);
    } catch (err) {
      console.error('클립보드에 복사 실패:', err);
    }
  };

  return (
    <div className={modalWrapper}>
      <Button type='button' size='large' colorStyle='blue' filled>
        영수증 이미지로 저장하기
      </Button>
      <div className={doubleButtonWrapper}>
        <div className={buttonStyleForSharing}>
          <Button
            onClick={() => {
              setIsSelected(true);
              copyLink(true);
            }}
            type='button'
            size='small'
            colorStyle='blue'
            filled={isSelected}
          >
            어른용
          </Button>
        </div>

        <div className={buttonStyleForSharing}>
          <Button
            onClick={() => {
              setIsSelected(false);
              copyLink(true);
            }}
            type='button'
            size='small'
            colorStyle='blue'
            filled={!isSelected}
          >
            친구용
          </Button>
        </div>
      </div>
      <div>
        {isSelected ? (
          <div>어른들을 위한 큰 글씨! </div>
        ) : (
          <div> 문구 변경 필요! </div>
        )}
      </div>
    </div>
  );
};
