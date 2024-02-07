import { cookies } from 'next/headers';

import Home from '@/containers/home';
import { getHomeCards } from '@/services/home';

const HomePage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getHomeCards(refreshToken);

  return <Home {...data} />;
};

export default HomePage;
