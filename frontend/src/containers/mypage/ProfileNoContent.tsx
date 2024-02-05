'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { NagCardKeyOptions } from '@/types/nagCard';
import useModal from '@/hooks/useModal';
import { totalReceiptCountResponse } from '@/types/receipt';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

interface Props {
  totalReceiptCount: totalReceiptCountResponse;
}

const ProfileNoContent = ({ totalReceiptCount }: Props) => {
  const router = useRouter();
  const { Modal, openModal } = useModal();

  const card: NagCardKeyOptions = {
    categoryKey: 0,
    typeKey: 0,
    sizeKey: 2,
    textStyleKey: 0,
  };

  const renderSavedReceipts = () => {
    const receipts = Array.from(
      { length: totalReceiptCount.receiptCount },
      (_, i) => (
        <div
          key={i}
          className={styles.savedReceiptsFrame}
          onClick={() => router.push(`/receipts/${i + 1}`)}
        />
      ),
    );

    return <div className={styles.savedReceiptsContainer}>{receipts}</div>;
  };

  return (
    <div className={styles.profileContentStyle}>
      <div className={styles.mypageText({ contentType: 'card' })} />
      <Button
        type='button'
        size='large'
        colorStyle='lightGray'
        filled
        onClick={openModal}
      >
        영수증 발급
      </Button>
      <div className={styles.savedReceiptsContainer}>
        {renderSavedReceipts()}
      </div>
      <Modal title='잔소리 카드를 먼저 만들어 주세요.'>
        <div className={styles.actionModalWrapper}>
          <Button
            type='button'
            size='large'
            colorStyle='blue'
            filled
            onClick={() => router.push('/category')}
          >
            잔소리 카드 등록하기
          </Button>
        </div>
      </Modal>
      <div
        className={`${styles.mypageText({ contentType: 'card' })} ${styles.noCardWrapper}`}
      >
        <NagCard cardOption={card} />
      </div>
    </div>
  );
};

export default ProfileNoContent;
