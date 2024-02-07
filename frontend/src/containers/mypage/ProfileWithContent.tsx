'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import useModal from '@/hooks/useModal';
import { actionResponse } from '@/types/userData';
import { getCards } from '@/services/mypage';
import { useObserver } from '@/hooks/useObserver';
import SavedReceiptContainer from '@/containers/mypage/SavedReceiptContainer';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

interface Props {
  content: actionResponse[];
  last: boolean;
  receiptCount: 0 | 1 | 2 | 3;
}

const ProfileWithContent = ({ content, last, receiptCount }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(last);
  const [cards, setCards] = useState<actionResponse[]>(content);
  const router = useRouter();
  const { Modal, openModal, closeModal } = useModal();

  const handleReceiptCount = async () => {
    if (receiptCount >= 3) {
      openModal();
    } else {
      router.push(`/newreceipt`);
    }
  };

  const handleCardClick = (actionId: number) => {
    router.push(`/carddetails/${actionId}`);
  };

  const handleLastCardDetected = async () => {
    if (isLast || isLoading) return;
    setIsLoading(true);

    const data = await getCards();
    if (data.last) setIsLast(data.last);

    setCards((prevCards) => [...prevCards, ...data.content]);

    setIsLoading(false);
  };

  const refLast = useObserver(handleLastCardDetected).ref;

  return (
    <div className={styles.profileContentStyle}>
      <Button
        type='button'
        size='large'
        colorStyle='blue'
        filled
        onClick={handleReceiptCount}
      >
        영수증 발급
      </Button>
      {receiptCount > 0 && (
        <SavedReceiptContainer receiptCount={receiptCount} />
      )}
      <div className={styles.cardGridWrapper}>
        {cards.map((card) => (
          <div
            role='presentation'
            onClick={() => handleCardClick(card.actionId)}
            key={card.actionId}
          >
            <NagCard
              key={card.actionId}
              cardOption={{
                categoryKey: card.categoryId,
                typeKey: 1,
                sizeKey: 1,
                textStyleKey: 1,
                shadow: false,
                text: '',
              }}
            />
          </div>
        ))}
      </div>
      {isLast ? <div /> : <div ref={refLast} />}
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
