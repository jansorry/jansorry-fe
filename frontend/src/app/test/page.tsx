'use client';

import { getToken } from '@/services/token';

const HomePage = async () => {
  const clicked = async () => {
    const token = await getToken();
    console.log('token: ', token);

    const data = await fetch(`/members`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <button type='button' onClick={clicked}>
      내 정보 조회
    </button>
  );
};

export default HomePage;
