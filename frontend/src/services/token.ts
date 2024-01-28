import { tokenResponse } from '@/types/token';

export const getToken = async (): Promise<string> => {
  const data: tokenResponse = await fetch(`/members/reissue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json());

  console.log('클라이언트에서 토큰 요청 후 어떤 데이터가 올까요? : ', data);
  return data.accessToken;
};

export const getServerToken = async (token: string): Promise<string> => {
  const data: tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/members/reissue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `refreshToken=${token}; HttpOnly; Secure; Path=/; SameSite=None`,
    },
    credentials: 'include',
  }).then((res) => res.json());

  console.log('서버에서 토큰 요청 후 어떤 데이터가 올까요? : ', data);
  return data.accessToken;
};
