import { tokenResponse } from '@/types/token';

export const getToken = async (): Promise<string> => {
  const data: tokenResponse = await fetch(`/api/members/reissue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json());

  return data.accessToken;
};

export const getServerToken = async (token: string): Promise<string> => {
  const data: tokenResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/members/reissue`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `refreshToken=${token}; HttpOnly; Secure; Path=/; SameSite=None`,
      },
      credentials: 'include',
    },
  ).then((res) => res.json());

  return data.accessToken;
};
