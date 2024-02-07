import {
  followerResponse,
  followingResponse,
  searchResponse,
} from '@/types/follow';
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

export const getSearchByNickname = async (
  nickname: string,
): Promise<searchResponse> => {
  const data: searchResponse = await apiClient.get<searchResponse>(
    `/follows?nickname=${nickname}`,
  );
  return data;
};
