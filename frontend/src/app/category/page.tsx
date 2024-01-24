import { getNagCategory } from '@/services/nag';
import Category from '@/containers/category';

const CategoryPage = async () => {
  const data = await getNagCategory();

  return <Category nagItems={data} />;
};

export default CategoryPage;
