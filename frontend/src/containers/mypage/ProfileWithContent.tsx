'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { NagCardKeyOptions } from '@/types/nagCard';
import useModal from '@/hooks/useModal';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';
import Modal from '@/components/Modal';

interface Props {
  NagCount: number;
}

const ProfileWithContent = ({ NagCount }: Props) => {
  const router = useRouter();
  const [receiptCount, setReceiptCount] = useState<number>(0);
  const { isOpen, open, close } = useModal();

  useEffect(() => {
    // TODO: Replace the below URL with the actual API endpoint if needed
    fetch('/api/v1/receipts')
      .then((response) => response.json())
      .then((data) => {
        setReceiptCount(data.receiptCount);
      })
      .catch((error) => {
        console.error('Failed to fetch receipt count', error);
        // Handle error state as needed
      });
  }, []);

  const handleReceiptCount = () => {
    if (NagCount >= 3) {
      open();
    } else {
      router.push('/receipts');
    }
  };

  // 현재 NagCardKeyOptions는 데이터가 없어서 임시로 구현
  const card: NagCardKeyOptions = {
    categoryKey: 2,
    typeKey: 1,
    sizeKey: 2,
    textStyleKey: 0,
  };

  return (
    <div className={styles.profileContentStyle}>
      <div className={styles.profileText({ contentType: 'card' })} />
      <Button
        type='button'
        size='large'
        colorStyle='blue'
        filled
        onClick={handleReceiptCount}
      >
        영수증 발급
      </Button>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={close}
          title='영수증은 세 개까지만 저장 가능해요.'
        >
          <div className={styles.actionModalWrapper}>
            <Button
              type='button'
              size='large'
              colorStyle='blue'
              filled
              onClick={close}
            >
              확인
            </Button>
          </div>
        </Modal>
      )}
      <div className={styles.profileText({ contentType: 'card' })}>
        <NagCard cardOption={card} />
      </div>
    </div>
  );
};

export default ProfileWithContent;
