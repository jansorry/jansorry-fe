import { ReactNode } from 'react';
import Link from 'next/link';

import * as styles from './index.css';

interface Props {
  children: ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ link, children, disabled, onClick, type }: Props) => {
  if (link) {
    return (
      <Link href={link} className={styles.commonButton}>
        {children}
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} disabled={disabled} className={styles.commonButton} onClick={onClick}>


      {children}
    </button>
  );
};

export default Button;
