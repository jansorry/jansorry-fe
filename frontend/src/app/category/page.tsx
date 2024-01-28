import { cookies } from 'next/headers';

import { getNagCategory } from '@/services/nag';
import Category from '@/containers/category';

const CategoryPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value ?? '';
  const data = await getNagCategory(refreshToken);

  return <Category nagItems={data} />;
};

export default CategoryPage;
