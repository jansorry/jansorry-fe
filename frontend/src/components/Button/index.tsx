import { ReactNode } from 'react';
import Link from 'next/link';

import { ButtonWrapper, commonButton } from '@/components/Button/index.css';

interface Props {
  children: ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
  size: 'large' | 'small';
  colorStyle: 'blue' | 'strongRed';
  filled: boolean;
}

const Button = ({ link, children, disabled, onClick, type, size, colorStyle, filled }: Props) => {
  if (link) {
    return (
      <div className={ButtonWrapper[size]}>
        <Link href={link} className={commonButton({ size, colorStyle, filled })}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className={ButtonWrapper[size]}>
      <button
        // 왜 오류가 날까요?
        type={type}
        disabled={disabled}
        className={commonButton({ size, colorStyle, filled })}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
