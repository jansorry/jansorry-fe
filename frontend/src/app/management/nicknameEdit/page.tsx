import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import NicknameEdit from '@/containers/management/nicknameEdit';

const NicknameEditPage = () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  if (refreshToken === undefined) {
    redirect('/401');
  }

  return <NicknameEdit />;
};

export default NicknameEditPage;
