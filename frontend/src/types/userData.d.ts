export interface userDataResponse {
  nickname: string;
  imageUrl: string;
  followerCnt: number;
  followingCnt: number;
}

export interface action {
  categoryId: number;
  nagContent: string;
  actionId: number;
  actionContent: string;
}

export interface actionTotalCount {
  size: number;
  content: action[];
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
  last: boolean;
  empty: boolean;
}

export interface totalReceiptCount {
  receiptCount: number;
}
