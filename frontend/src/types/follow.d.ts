export interface followerResponse {
  fromId: number;
  imageUrl: number;
  nickname: string;
}

export interface followingResponse {
  toId: number;
  imageUrl: number;
  nickname: string;
}

export interface searchResponse {
  memberId: number;
  nickname: string;
  imageUrl: number;
}
