'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import useModal from '@/hooks/useModal';
import { actionResponse } from '@/types/userData';
import { ReceiptData, totalReceiptCountResponse } from '@/types/receipt';
import { postReceipt } from '@/services/receipt';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

interface Props {
  actions: actionResponse[];
  totalReceiptCount: totalReceiptCountResponse;
}

const ProfileWithContent = ({ actions, totalReceiptCount }: Props) => {
  const router = useRouter();
  const { Modal, openModal, closeModal } = useModal();

  const handleReceiptCount = () => {
    if (totalReceiptCount.receiptCount >= 3) {
      openModal();
    } else {
      const receiptData: ReceiptData = {
        // title, description: OG 사용해서 추가 예정
        title: '명절 잔소리에 가격을 매길 수 있다고요?',
        description:
          '내 친구들은 이번 명절에 어떤 잔소리를 들었을지 궁금하다면?',
        message: '명절 잔소리 영수증 하러가기',
        // familiyUrl, freindUrl 임시 설정
        familyUrl: `https://temp.family`,
        friendUrl: 'https://temp.friend',
        // 현재 시각은 생성 시각으로 설정해야 함
        createdAt: new Date().toISOString(), // 현재 시각을 ISO 문자열로 설정
      };

      postReceipt(receiptData)
        .then(() => {
          router.push(`/receipts/${totalReceiptCount.receiptCount + 1}`);
        })
        .catch((error) => {
          console.error('Failed to save the receipt:', error);
        });
    }
  };

  const handleCardClick = (actionId: number) => {
    router.push(`/actions/${actionId}`);
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
      <div className={styles.cardGridWrapper}>
        {actions.map((action) => (
          <div
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
