export interface createActionRequest {
  nagId: number;
  content: string;
}

export interface getActionResponse {
  categoryId: number;
  nagContent: string;
  actionId: number;
  actionContent: string;
}
