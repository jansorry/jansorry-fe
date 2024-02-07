import { cookies } from 'next/headers';

import Home from '@/containers/home';
import { getHomeCards } from '@/services/home';

const HomePage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  // const data = await getHomeCards(refreshToken);
  const data = { count: 3, categoryList: [1, 2, 3] };

  return <Home {...data} />;
};

export default HomePage;
