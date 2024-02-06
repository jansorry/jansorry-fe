import { followerResponse, followingResponse } from '@/types/follow';
import { apiClient } from '@/services/index';

export const getFollowers = async (): Promise<followerResponse[]> => {
  const data: followerResponse[] =
    await apiClient.get<followerResponse[]>(`/follows/follower`);
  return data;
};

export const getFollowings = async (): Promise<followingResponse[]> => {
  const data: followingResponse[] =
    await apiClient.get<followingResponse[]>(`/follows/following`);
  return data;
};
