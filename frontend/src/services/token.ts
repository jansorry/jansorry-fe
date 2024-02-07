import { tokenResponse } from '@/types/token';

export const getToken = async (): Promise<string> => {
  const response = await fetch(`/api/members/reissue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (!response.ok) {
    window.location.href = '/401';
  }
  return response.json().then((res: tokenResponse) => res.accessToken);
};

export const getServerToken = async (token: string): Promise<string> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/members/reissue`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `refreshToken=${token}; HttpOnly; Secure; Path=/; SameSite=None`,
      },
      credentials: 'include',
    },
  );
  if (!response.ok) {
    throw new Error('no authentication');
  }
  return response.json().then((res: tokenResponse) => res.accessToken);
};
