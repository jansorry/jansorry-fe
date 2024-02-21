import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Withdrawal from '@/containers/management/withdrawal';

const WithdrawalPage = () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  if (refreshToken === undefined) {
    redirect('/401');
  }

  return <Withdrawal />;
};

export default WithdrawalPage;
