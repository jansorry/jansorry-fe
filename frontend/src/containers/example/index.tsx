// server component example
import { users } from '@/containers/example/users';

import User from './User';
import NagCard from '@/components/NagCard';

const Example = () => {
  return (
    <main>
      <NagCard card={{ categoryKey: 1, typeKey: 1, sizeKey: 3, textStyleKey: 2, text: 'test' }} />

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
