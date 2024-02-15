'use client';

import { useState } from 'react';

import * as styles from '@/containers/myreceipt/index.css';
import { copyLink } from '@/utils/makeReceipt';
import { IconSharing } from '#/svgs';

import Button from '@/components/Button';

interface Props {
  familyUrl: string;
  friendUrl: string;
  saveImageEvent: () => void;
}

export const SharingButtons = ({
  familyUrl,
  friendUrl,
  saveImageEvent,
}: Props) => {
  const [isSelected, setIsSelected] = useState<'family' | 'friend' | null>(
    null,
  );

  const clickCopyLinkEvent = {
    family() {
      setIsSelected('family');
      copyLink(familyUrl);
    },
    friend() {
      setIsSelected('friend');
      copyLink(friendUrl);
    },
  };

  const saveImageEventhandler = () => {
    saveImageEvent();
  };

  return (
    <div className={styles.modalWrapper}>
      <Button
        onClick={saveImageEventhandler}
        type='button'
        size='large'
        colorStyle='blue'
        filled
      >
        영수증 이미지로 저장하기
      </Button>
      <div className={styles.doubleButtonWrapper}>
        <Button
          onClick={clickCopyLinkEvent.family}
          type='button'
          size='small'
          colorStyle='blue'
          filled={isSelected === 'family'}
        >
          <div>
            <span className={styles.iconAndText}>
              <IconSharing />
            </span>
            어른용
          </div>
        </Button>

        <Button
          onClick={clickCopyLinkEvent.friend}
          type='button'
          size='small'
          colorStyle='blue'
          filled={isSelected === 'friend'}
        >
          <span>
            <span className={styles.iconAndText}>
              <IconSharing />
            </span>
            친구용
          </span>
        </Button>
      </div>
      <div>
        {isSelected !== 'friend' ? (
          <div className={styles.explainText}>
            <div>어른용 영수증은 글씨가 커져요! 👀 </div>
            <div>💘 애교 있는 문구가 추가돼요.</div>
            <div>어른들께 잔소리 비용💸을 청구해봐요!</div>
          </div>
        ) : (
          <div className={styles.explainText}>
            <div>👭 친구들에게 영수증을 공유해요!</div>
            <div>영수증 내역🧾을 비교하고</div>
            <div>누가 가장 비싼 잔소리를 들었는지 확인해봐요.</div>
          </div>
        )}
      </div>
    </div>
  );
};
