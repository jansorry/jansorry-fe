import { apiServer } from '@/services/index';
import { liveFeedResponse } from '@/types/feed';

export const getLiveFeed = async (
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
    last: false,
    empty: false,
  };
};
