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
  const data = await getNagDetails(nagId, refreshToken);

  return <CreateCard {...data} />;
};

export default CreateCardPage;
