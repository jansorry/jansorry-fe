'use client';

import { nagDetails } from '@/types/nag';
import { NagCardKeyOptions } from '@/types/nagCard';
import useModal from '@/hooks/useModal';
import CreateModalContent from '@/containers/createcard/CreateModalContent';

import Header from '@/components/Header';
import NagCard from '@/components/NagCard';
import Button from '@/components/Button';
import * as styles from './index.css';
import Modal from '@/components/Modal';
import { cardLargeNag } from '@/components/NagCard/cardOptionsSet';

const CreateCard = ({ categoryId, nagId, content }: nagDetails) => {
  const { isOpen, open, close } = useModal();

  const selectedCardOption: NagCardKeyOptions = cardLargeNag(
    categoryId,
    content,
  );

  return (
    <>
      <Header title='내 카드 등록' hasPrevious />
      <div className={styles.createCardWrapper}>
        <NagCard cardOption={selectedCardOption} />
        <Button
          type='button'
          size='large'
          colorStyle='blue'
          filled
          onClick={open}
        >
          잔소리 반응 등록하기
        </Button>
        {isOpen && (
          <Modal
            open={isOpen}
            onClose={close}
            title={`"${content}" 라는 잔소리를 들었어요.`}
          >
            <CreateModalContent nagId={nagId} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default CreateCard;
