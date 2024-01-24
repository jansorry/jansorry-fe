import { ReactNode } from 'react';
import Link from 'next/link';

import { CommonButtonVariantProps, ButtonWrapper, commonButton } from '@/components/Button/index.css';

interface ButtonProps {
  children: ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
}


const Button = ({ link, children, disabled, onClick, type, size, colorStyle, filled}: ButtonProps & CommonButtonVariantProps) => {
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
        // eslint-disable-next-line react/button-has-type
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
