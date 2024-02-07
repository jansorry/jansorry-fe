'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import useModal from '@/hooks/useModal';
import { actionResponse, actionTotalCountResponse } from '@/types/userData';
import { getCards } from '@/services/mypage';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import SavedReceiptContainer from '@/containers/mypage/SavedReceiptContainer';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

interface Props {
  actionData: actionTotalCountResponse;
  content: actionResponse[];
  last: boolean;
  receiptCount: 0 | 1 | 2 | 3;
}

const ProfileWithContent = ({ actionData, last, receiptCount }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(last);
  const [cards, setCards] = useState<actionResponse[]>(
    actionData.content.slice(0, 20),
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
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
    router.push(`/actions/${actionId}`);
  };

  const handleLastCardDetected = async () => {
    if (isLast || isLoading) return;
    setIsLoading(true);

    const nextPage = currentPage + 1;
    const data = await getCards();
    if (data.last) setIsLast(data.last);

    setCards((prevCards) => [...prevCards, ...data.content]);
    setCurrentPage(nextPage);
    setIsLoading(false);
  };

  const refLast = useInfiniteObserver(handleLastCardDetected);

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
                text: card.actionContent,
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
