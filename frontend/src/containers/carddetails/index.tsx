'use client';

import { getActionResponse } from '@/types/action';
import useModal from '@/hooks/useModal';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import NagCard from '@/components/NagCard';
import {
  cardLargeComment,
  cardLargeNag,
} from '@/components/NagCard/cardOptionsSet';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const CardDetails = ({
  categoryId,
  nagContent,
  actionId,
  actionContent,
}: getActionResponse) => {
  const { isOpen, open, close } = useModal();

  const handleDeleteClicked = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <Header title='내 카드 목록' hasPrevious />
      <div className={styles.cardDetailsWrapper}>
        <span className={styles.cardDetailsSubTitle}>내 카드에요</span>
        <NagCard cardOption={cardLargeNag(categoryId, nagContent)} />
        <NagCard cardOption={cardLargeComment(categoryId, actionContent)} />
        <Button
          type='button'
          size='large'
          colorStyle='strongRed'
          filled
          onClick={open}
        >
          내 카드 삭제하기
        </Button>
      </div>
      <NavBar />
      {isOpen && (
        <Modal open={isOpen} onClose={close} title='내 카드를 삭제하시겠어요?'>
          <div className={styles.cardDeleteModal}>
            <Button
              type='button'
              size='large'
              colorStyle='strongRed'
              filled
              onClick={() => handleDeleteClicked(actionId)}
            >
              내 카드 삭제하기
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CardDetails;
