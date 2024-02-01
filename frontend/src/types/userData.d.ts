export interface userDataResponse {
  nickname: string;
  imageUrl: string;
  followerCnt: number;
  followingCnt: number;
}

export interface action {
  categoryId: number;
  actionId: number;
  content: string;
}

export interface actionTotalCount {
  content: action[];
}
