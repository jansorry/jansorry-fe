import { cookies } from 'next/headers';

import { getLiveFeedonServer } from '@/services/feed';
import Feed from '@/containers/feed';

const FeedPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getLiveFeedonServer(refreshToken);

  return <Feed {...data} />;
};

export default FeedPage;
