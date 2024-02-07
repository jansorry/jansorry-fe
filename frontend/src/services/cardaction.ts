import { redirect } from 'next/navigation';

import { apiClient, apiServer } from '@/services/index';
import { createActionRequest, getActionResponse } from '@/types/action';

export const createCardAction = async (actionInfo: createActionRequest) => {
  try {
    return await apiClient.post(`/nags/${actionInfo.nagId}/actions`, {
      content: actionInfo.content,
    });
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getCardAction = async (
  actionId: number,
  token: string = '',
): Promise<getActionResponse> => {
  try {
    return await apiServer.get<getActionResponse>(
      `/actions/${actionId}`,
      token,
    );
  } catch (error) {
    console.log(error);
  }
  return redirect('/401');
};

export const deleteCardAction = async (actionId: number) => {
  try {
    return await apiClient.delete(`/actions/${actionId}`);
  } catch (error) {
    console.log(error);
  }
  return null;
};
