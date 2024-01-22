import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { IconClose } from '#/svgs';

import * as styles from './index.css';

interface Props {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, title, onClose, children }: Props) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modalWrapper}>
        <button type='button' onClick={onClose} className={styles.closeButton}>
          <IconClose />
        </button>
        {title && <div className={styles.modalTitle}>{title}</div>}
        {children}
      </div>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;
