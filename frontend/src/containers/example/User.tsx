'use client';

// client component example
import Link from 'next/link';
import { useState } from 'react';

import useModal from '@/hooks/useModal';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface Props {
  id: string;
  name: string;
  image: string;
  link?: string;
}

const User = ({ id, name, image, link }: Props) => {
  const { isOpen, open, close } = useModal();

  return (
    <li>
      <Button type='button' onClick={open}>
        눌러
      </Button>
      {isOpen && (
        <Modal open={isOpen} onClose={close} title='버튼을 누르셨네요.'>
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
