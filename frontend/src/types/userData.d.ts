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

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
export interface Pageable {
  offset: number;
  sort: Sort;
  paged: boolean;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
}

export interface actionTotalCount {
  size: number;
  content: Action[];
  number: number;
  sort: Sort;
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface totalReceiptCount {
  receiptCount: number;
}
