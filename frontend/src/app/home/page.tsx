'use client';

import { api } from '@/services';

const HomePage = () => {
  const clicked = async () => {
    const data = await api.get(`/members`);
    console.log(data);
  };

  return (
    <>
      <div>여기는 홈페이지</div>
      <button type='button' onClick={clicked}>
        내 정보 봐버리기
      </button>
    </>
  );
};

export default HomePage;
