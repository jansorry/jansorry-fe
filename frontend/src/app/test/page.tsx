'use client';

import { getToken } from '@/services/token';
import { apiClient } from '@/services';

const HomePage = async () => {
  const clicked = async () => {
    const token = await getToken();
    console.log('token: ', token);

    const data = await apiClient.get(`/members`);
    console.log(data);

    const categoryData = await fetch(`/nags`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    console.log(categoryData);
  };

  return (
    <button type='button' onClick={clicked}>
      내 정보 조회
    </button>
  );
};

export default HomePage;
