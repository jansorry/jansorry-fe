import { cookies } from 'next/headers';

import { getNagCategory } from '@/services/nag';
import Category from '@/containers/category';

const CategoryPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value ?? '';
  cookieStore.set('refreshToken', refreshToken);

  const data = await getNagCategory();

  return <Category nagItems={data} />;
};

export default CategoryPage;
