export interface createActionRequest {
  nagId: number;
  content: string;
}

export interface getActionResponse {
  categoryId: number;
  actionId: number;
  content: string;
}
