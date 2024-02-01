import { apiClient } from '@/services/index';
import { createActionRequest } from '@/types/action';

export const createCardAction = async (actionInfo: createActionRequest) => {
  try {
    return await apiClient.post(`/nags/${actionInfo.nagId}/actions`, {
      content: actionInfo.content,
    });
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
