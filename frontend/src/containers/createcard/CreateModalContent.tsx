'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import * as styles from '@/containers/createcard/index.css';
import { MAX_ACTION_INPUT_LENGTH } from '@/constants';
import { createActionRequest } from '@/types/action';
import { createCardAction } from '@/services/cardaction';

import Button from '@/components/Button';

interface Props {
  nagId: number;
}

const CreateModalContent = ({ nagId }: Props) => {
  const router = useRouter();

  const [action, setAction] = useState<string>('');
  const [inputCount, setInputCount] = useState<number>(0);
  const [showWarningMaxLine, setShowWarningMaxLine] = useState<boolean>(false);

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
  const handleCreateAction = async (actionContent: string) => {
    const actionInfo: createActionRequest = { nagId, content: actionContent };
    await createCardAction(actionInfo);
    router.push('/mypage');
  };

  return (
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
          <div className={styles.warningMaxLineRecipe({ warning: true })}>
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
        onClick={() => handleCreateAction(action)}
      >
        카드 등록하기
      </Button>
    </div>
  );
};

export default CreateModalContent;
