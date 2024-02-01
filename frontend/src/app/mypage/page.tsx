import { cookies } from 'next/headers';

import { getProfile } from '@/services/profile';

import Profile from '../../containers/mypage';

const ProfilePage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getProfile(refreshToken);

  return <Profile profileItems={data} />;
};

export default ProfilePage;
