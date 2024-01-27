import { tokenResponse } from '@/types/token';

export const getToken = async (isServer?: boolean): Promise<string> => {
  const url = isServer ? `${process.env.NEXT_PUBLIC_SERVER_URL}/members/reissue` : `/members/reissue`;
  const data: tokenResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json());

  console.log('토큰 요청 후 어떤 데이터가 올까요? : ', data);
  return data.accessToken;
};
