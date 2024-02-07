import { redirect } from 'next/navigation';

import { apiClient, apiServer } from '@/services/index';
import { feedResponse } from '@/types/feed';

export const getLiveFeedonServer = async (
  token: string = '',
): Promise<feedResponse> => {
  try {
    return await apiServer.get<feedResponse>(`/feed/actions/live`, token);
  } catch (error) {
    console.log(error);
  }
  return redirect('/401');
};

export const getFeed = async (
  lastActionId: number,
  hashtagId?: number,
): Promise<feedResponse> => {
  try {
    const actionIdParams =
      lastActionId !== -1 ? `?lastActionId=${lastActionId}` : '';

    let feedType;
    let generationParams = '';
    switch (hashtagId) {
      case 0: // live feed
        feedType = 'live';
        break;
      case 1: // followings feed
        feedType = 'followings';
        break;
      case 2: // trending feed
        feedType = 'trending';
        break;
      case 3: // 10s feed
      case 4: // 20s feed
      case 5: // 30s feed
        feedType = 'generation';
        generationParams = lastActionId !== -1 ? '&age=' : '?age=';
        if (hashtagId === 3) generationParams += '10';
        else if (hashtagId === 4) generationParams += '20';
        else generationParams += '30';
        break;
      default: // live feed
        feedType = 'live';
    }
    return await apiClient.get<feedResponse>(
      `/feed/actions/${feedType}${actionIdParams}${generationParams}`,
    );
  } catch (error) {
    console.log(error);
  }
  return {
    size: -1,
    content: [],
    number: -1,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
    pageable: {
      offset: -1,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
      pageNumber: -1,
      pageSize: -1,
      paged: false,
      unpaged: false,
    },
    numberOfElements: -1,
    first: false,
    last: true,
    empty: false,
  };
};

export const likeFeed = async (actionId: number) => {
  try {
    return await apiClient.post(`/actions/${actionId}/favorite`);
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const dislikeFeed = async (actionId: number) => {
  try {
    return await apiClient.delete(`/actions/${actionId}/favorite`);
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const followUser = async (memberId: number) => {
  try {
    return await apiClient.post(`/follows/${memberId}`);
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const unfollowUser = async (memberId: number) => {
  try {
    return await apiClient.delete(`/follows/${memberId}`);
  } catch (error) {
    console.log(error);
  }
  return null;
};
