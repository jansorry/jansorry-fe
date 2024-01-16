'use client';

// client component example
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/Button';

interface Props {
  id: string;
  name: string;
  image: string;
  link?: string;
}

const User = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const { id, name, image, link } = props;

  const clicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <Button type='button' onClick={clicked}>
        눌러
      </Button>
      {isOpen ? <div>버튼 눌렀나요?</div> : <div>버튼 눌렸어요</div>}
      <div>{id}</div>
      <div>{name}</div>
      {link ? (
        <Link href={link}>
          <img src={image} alt={id} width={200} height={200} />
        </Link>
      ) : (
        <img src={image} alt={id} width={200} height={200} />
      )}
      <article>{link && <Link href={link} />}</article>
    </li>
  );
};

export default User;
