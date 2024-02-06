'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import useModal from '@/hooks/useModal';
import { totalReceiptCountResponse } from '@/types/receipt';
import { actionTotalCountResponse, actionResponse } from '@/types/userData';
import { getCards } from '@/services/mypage';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import SavedReceiptContainer from '@/containers/mypage/SavedReceiptContainer';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

interface Props {
  totalActionCards: actionTotalCountResponse;
  totalReceiptCount: totalReceiptCountResponse;
}

const ProfileWithContent = ({ totalActionCards, totalReceiptCount }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(totalActionCards.last);
  const [cards, setCards] = useState<actionResponse[]>(
    totalActionCards.content,
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const router = useRouter();
  const { Modal, openModal, closeModal } = useModal();

  const handleReceiptCount = async () => {
    if (totalReceiptCount.receiptCount >= 3) {
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
    const data = await getCards(nextPage * 20);
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
      {totalReceiptCount.receiptCount > 0 && (
        <SavedReceiptContainer totalReceiptCountProps={totalReceiptCount} />
      )}
      <div className={styles.cardGridWrapper}>
        {totalActionCards.content.map((action) => (
          <div
            role='presentation'
            onClick={() => handleCardClick(action.actionId)}
            key={action.actionId}
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
