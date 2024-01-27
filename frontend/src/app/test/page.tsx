'use client';

import { getToken } from '@/services/token';
import { api } from '@/services';

const HomePage = async () => {
  const clicked = async () => {
    const token = await getToken();
    console.log('token: ', token);

    const data = await api.get(`/members`);

    console.log(data);
  };

  return (
    <button type='button' onClick={clicked}>
      내 정보 조회
    </button>
  );
};

export default HomePage;
