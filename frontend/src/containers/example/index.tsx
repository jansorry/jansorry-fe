// server component example
import { users } from '@/containers/example/users';
import { NagCardKeyOptions } from '@/types/nagCard';
import KakaoLogin from '@/containers/welcome/KakaoLoginButton';

import User from './User';
import NagCard from '@/components/NagCard';

const Example = () => {
  const card: NagCardKeyOptions = { categoryKey: 1, typeKey: 1, sizeKey: 3, textStyleKey: 2, text: 'test' };

  return (
    <main>
      <NagCard card={card} />
      <div>
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
      <KakaoLogin />
    </main>
  );
};

export default Example;
