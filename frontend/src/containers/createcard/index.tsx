'use client';

import { ChangeEvent, useState } from 'react';

import { nagDetails } from '@/types/nag';
import { NagCardKeyOptions } from '@/types/nagCard';
import useModal from '@/hooks/useModal';
import { MAX_ACTION_INPUT_LENGTH } from '@/constants';

import Header from '@/components/Header';
import NagCard from '@/components/NagCard';
import Button from '@/components/Button';
import * as styles from './index.css';
import Modal from '@/components/Modal';

const CreateCard = ({ categoryId, nagId, content }: nagDetails) => {
  const { isOpen, open, close } = useModal();
  const [action, setAction] = useState<string>('');
  const [inputCount, setInputCount] = useState<number>(0);
  const [showWarningMaxLine, setShowWarningMaxLine] = useState<boolean>(false);

  const selectedCardOption: NagCardKeyOptions = {
    categoryKey: categoryId,
    typeKey: 1,
    sizeKey: 3,
    textStyleKey: 1,
    text: content,
  };

  const handleActionInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // 현재 영역을 벗어나지 않게 줄바꿈 제한
    if (event.target.scrollHeight === event.target.clientHeight) {
      if (event.target.value.length > MAX_ACTION_INPUT_LENGTH) {
        event.target.value = event.target.value.slice(0, 75);
      }
      setAction(event.target.value);
      setInputCount(event.target.value.length);
      setShowWarningMaxLine(false);
    } else {
      setShowWarningMaxLine(true);
    }
  };

  const handleCreateAction = () => {
    console.log(action);
  };

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
            <div className={styles.actionModalWrapper}>
              <textarea
                value={action}
                className={styles.actionTextareaBox}
                onChange={handleActionInput}
                maxLength={75}
                placeholder='어떻게 반응하셨나요? (선택 사항)'
              />
              <div className={styles.actionInputInfoWrapper}>
                {showWarningMaxLine ? (
                  <div
                    className={styles.warningMaxLineRecipe({ warning: true })}
                  >
                    ❗ 4줄까지만 입력할 수 있어요.
                  </div>
                ) : (
                  <div className={styles.warningMaxLineRecipe()} />
                )}
                <span className={styles.inputCountState}>
                  {inputCount}/{MAX_ACTION_INPUT_LENGTH}
                </span>
              </div>
              <Button
                type='button'
                size='large'
                colorStyle='blue'
                filled
                onClick={handleCreateAction}
              >
                카드 등록하기
              </Button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default CreateCard;
