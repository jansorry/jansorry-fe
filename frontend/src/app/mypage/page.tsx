import { cookies } from 'next/headers';

import { getMyPage } from '@/services/mypage';

import MyPageContainer from '../../containers/mypage';

const MyPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getMyPage(refreshToken);

  return <MyPageContainer myPageItems={data} />;
};

export default MyPage;
