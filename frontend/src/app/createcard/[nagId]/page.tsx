import { cookies } from 'next/headers';

import { getNagDetails } from '@/services/nag';
import CreateCard from '@/containers/createcard';

interface Props {
  params: { nagId: number };
}

const CreateCardPage = async ({ params }: Props) => {
  const { nagId } = params;
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  // const data = await getNagDetails(nagId, refreshToken);
  const data = {
    nagId: 5,
    categoryId: 1,
    content: '이번 모의고사 몇 등급이니?',
    price: 30000,
  };

  return <CreateCard {...data} />;
};

export default CreateCardPage;
