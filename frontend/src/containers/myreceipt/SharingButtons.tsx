import { useState } from 'react';

import {
  doubleButtonWrapper,
  modalWrapper,
} from '@/containers/myreceipt/index.css';

import Button from '@/components/Button';

export const SharingButtons = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className={modalWrapper}>
      <Button type='button' size='large' colorStyle='blue' filled>
        영수증 이미지로 저장하기
      </Button>
      <div className={doubleButtonWrapper}>
        <Button type='button' size='small' colorStyle='blue' filled={false}>
          어른용
        </Button>
        <Button type='button' size='small' colorStyle='blue' filled={false}>
          친구용
        </Button>
      </div>
    </div>
  );
};
