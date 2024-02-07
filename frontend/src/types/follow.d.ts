interface userInfo {
  nickname: string;
  imageUrl: number;
}
export interface followerResponse extends userInfo {
  fromId: number;
}

export interface followingResponse extends userInfo {
  toId: number;
}

export interface searchResponse extends userInfo {
  memberId: number;
}
