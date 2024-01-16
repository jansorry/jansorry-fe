// server component example
import { users } from '@/containers/example/users';

import User from './User';

const Example = () => {
  return (
    <main>
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
