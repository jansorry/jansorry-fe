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
  content: Action[];
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    paged: boolean;
    unpaged: boolean;
    pageNumber: number;
    pageSize: number;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface totalReceiptCount {
  receiptCount: number;
}
