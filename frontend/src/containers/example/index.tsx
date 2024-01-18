// server component example
import { users } from '@/containers/example/users';

import User from './User';
import NagCard from '@/components/NagCard';

const Example = () => {
  return (
    <main>
      <div>
        <NagCard categoryKey={1} cardType={1} size={1} />
      </div>
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
