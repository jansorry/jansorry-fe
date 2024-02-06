import { cookies } from 'next/headers';

import { getManagement } from '@/services/management';
import ManagementContainer from '@/containers/management';

const ManagementPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getManagement(refreshToken);

  return <ManagementContainer managementItems={data} />;
};

export default ManagementPage;
