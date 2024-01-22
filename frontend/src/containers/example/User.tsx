'use client';

// client component example
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface Props {
  id: string;
  name: string;
  image: string;
  link?: string;
}

const User = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { id, name, image, link } = props;

  return (
    <li>
      <Button type='button' onClick={() => setIsOpen(true)}>
        눌러
      </Button>
      {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title='버튼을 누르셨네요.'>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
          <div>아아 모달 테스트</div>
        </Modal>
      )}
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
