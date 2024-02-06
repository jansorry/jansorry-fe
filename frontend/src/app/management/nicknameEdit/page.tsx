import { cookies } from 'next/headers';

import { getManagement } from '@/services/management';
import NicknameEditContainer from '@/containers/management';

const NicknameEditPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getManagement(refreshToken);

  return <NicknameEditContainer managementItems={data} />;
};

export default NicknameEditPage;
