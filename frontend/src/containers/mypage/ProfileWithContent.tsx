'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import useModal from '@/hooks/useModal';
import { totalReceiptCountResponse } from '@/types/receipt';
import { actionResponse } from '@/types/userData';
import { SavedReceipts } from '@/containers/mypage/SavedReciepts';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

interface Props {
  totalActionCards: actionResponse[];
  totalReceiptCount: totalReceiptCountResponse;
}

const ProfileWithContent = ({ totalActionCards }: Props) => {
  // , totalReceiptCount
  const router = useRouter();
  const { Modal, openModal, closeModal } = useModal();

  const handleReceiptCount = async () => {
    if (totalReceiptCount.receiptCount >= 3) {
      openModal();
    } else {
      router.push(`/receipts/${totalReceiptCount.receiptCount + 1}`);
    }
  };

  const handleCardClick = (actionId: number) => {
    router.push(`/actions/${actionId}`);
  };

  return (
    <div className={styles.profileContentStyle}>
      <div className={styles.mypageText({ contentType: 'card' })} />
      <Button
        type='button'
        size='large'
        colorStyle='blue'
        filled
        onClick={handleReceiptCount}
      >
        영수증 발급
      </Button>
      <SavedReceipts totalReceiptCount={totalReceiptCount} />
      <div className={styles.cardGridWrapper}>
        {totalActionCards.map((action) => (
          <div
            key={action.actionId}
            onClick={() => handleCardClick(action.actionId)}
          >
            <NagCard
              key={action.actionId}
              cardOption={{
                categoryKey: action.categoryId,
                typeKey: 1,
                sizeKey: 1,
                textStyleKey: 1,
                shadow: false,
                text: undefined,
              }}
            />
          </div>
        ))}
        ;
      </div>
      <Modal title='영수증은 세 개까지만 저장 가능해요.'>
        <div className={styles.actionModalWrapper}>
          <Button
            type='button'
            size='large'
            colorStyle='blue'
            filled
            onClick={closeModal}
          >
            확인
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileWithContent;
