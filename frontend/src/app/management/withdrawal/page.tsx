import { cookies } from 'next/headers';

import { getManagement } from '@/services/management';
import WithdrawalContainer from '@/containers/management';

const WithdrawalPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getManagement(refreshToken);

  return <WithdrawalContainer {...data} />;
};

export default WithdrawalPage;
