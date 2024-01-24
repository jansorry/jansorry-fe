import { api } from '@/services/index';
import { signup } from '@/types/signup';
import { login } from '@/types/login';

//  null을 반환해도 될까? login타입을 받아야 하는데 return을 비우면 에러나는군요.
export const postBirthGender = async (data: signup): Promise<login | null> => {
  const jsonData: string = JSON.stringify(data);
  try {
    return await api.post<string, login>('/members/signup', jsonData);
  } catch (e) {
    console.log(e);
  }
  return null;
};
