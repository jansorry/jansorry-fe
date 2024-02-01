import { cookies } from 'next/headers';

import { getCardAction } from '@/services/cardaction';

interface Props {
  params: { actionId: number };
}

const CardDetailsPage = async ({ params }: Props) => {
  const { actionId } = params;
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getCardAction(actionId, refreshToken);

  return <div />;
};

export default CardDetailsPage;
