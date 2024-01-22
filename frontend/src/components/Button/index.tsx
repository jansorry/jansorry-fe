import { ReactNode } from 'react';
import Link from 'next/link';

import { commonButton, CommonButtonVariants } from '@/components/Button/index.css';

interface Props {
  children: ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  buttonStyle: CommonButtonVariants;
}

const Button = ({ link, children, disabled, onClick, type, buttonStyle }: Props) => {
  if (link) {
    return (
      <Link href={link} className={commonButton(buttonStyle)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      // 왜 오류가 날까요?
      type={type}
      disabled={disabled}
      className={commonButton(buttonStyle)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
