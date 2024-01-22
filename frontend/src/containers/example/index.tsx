// server component example
import { users } from '@/containers/example/users';
import { NagCardKeyOptions } from '@/types/nagCard';

import User from './User';
import NagCard from '@/components/NagCard';
import Button from '@/components/Button';

const Example = () => {
  const card: NagCardKeyOptions = { categoryKey: 1, typeKey: 1, sizeKey: 3, textStyleKey: 2, text: 'test' };

  const buttonSmall = { colorStyle: 'red', filled: false, size: 'small' };
  return (
    <main>
      <NagCard card={card} />

      <Button type='button' buttonStyle={buttonSmall}>
        {' '}
        test{' '}
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
