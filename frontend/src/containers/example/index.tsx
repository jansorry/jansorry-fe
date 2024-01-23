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

      <Button size='large' filled colorStyle='strongRed' type='button'>
        이상한 버튼사이즈에 관하여
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
