import { apiClient, apiServer } from '@/services/index';
import { liveFeedResponse } from '@/types/feed';

export const getLiveFeedonServer = async (
  lastActionId: number,
  token: string = '',
): Promise<liveFeedResponse> => {
  try {
    const params = lastActionId !== -1 ? `?lastActionId=${lastActionId}` : '';
    return await apiServer.get<liveFeedResponse>(
      `/feed/actions/live${params}`,
      token,
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

export const getLiveFeed = async (
  lastActionId: number,
): Promise<liveFeedResponse> => {
  try {
    const params = lastActionId !== -1 ? `?lastActionId=${lastActionId}` : '';
    return await apiClient.get<liveFeedResponse>(`/feed/actions/live${params}`);
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
