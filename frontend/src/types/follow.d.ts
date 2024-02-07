interface userInfo {
  nickname: string;
  imageUrl: number;
}
export interface followerResponse extends userInfo {
  fromId: number;
  imageUrl: number;
  nickname: string;
}

export interface followingResponse extends userInfo {
  toId: number;
  imageUrl: number;
  nickname: string;
}

export interface searchResponse extends userInfo {
  memberId: number;
}
