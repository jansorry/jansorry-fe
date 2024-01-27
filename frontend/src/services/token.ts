import { tokenResponse } from '@/types/token';

export const getToken = async (): Promise<string> => {
  const data: tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/members/reissue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json());

  console.log('토큰 요청 후 어떤 데이터가 올까요? : ', data);
  return data.accessToken;
};
