export interface userDataResponse {
  nickname: string;
  imageUrl: number;
  followerCnt: number;
  followingCnt: number;
}

export interface actionResponse {
  categoryId: number;
  nagContent: string;
  actionId: number;
  actionContent: string;
}

export interface actionData {
  content: actionResponse[];
  last: boolean;
}

export interface actionTotalDataResponse extends actionData {
  size: number;
  number: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  pageable: {
    offset: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    paged: boolean;
    unpaged: boolean;
    pageSize: number;
    pageNumber: number;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
