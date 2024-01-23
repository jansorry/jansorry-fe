// server component example
import { users } from '@/containers/example/users';
import { NagCardKeyOptions } from '@/types/nagCard';

import User from './User';
import NagCard from '@/components/NagCard';
import Button from '@/components/Button';

const Example = () => {
  const card: NagCardKeyOptions = { categoryKey: 1, typeKey: 1, sizeKey: 3, textStyleKey: 2, text: 'test' };
  return (
    <main>
      <NagCard card={card} />
      <Button size='large' filled colorStyle='strongRed' type='button' link='https://www.naver.com'>
        영수증 사진으로 공유하기
      </Button>
      <Button size='large' filled colorStyle='strongRed' type='button'>
        영수증 사진으로 공유하기
      </Button>
      <Button size='small' filled colorStyle='black' type='button'>
        색상테스트
      </Button>
      <div>
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Example;
