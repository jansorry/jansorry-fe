const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

function handleError(status: number, message: string) {
  throw new Error(`${status}: ${message}`);
}

async function request<TResponse>(url: string, config: RequestInit): Promise<TResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, config);
  if (!response.ok) {
    handleError(response.status, response.statusText);
  }
  return response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url, { method: HTTPMethods.GET }),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody): Promise<TResponse> =>
    request<TResponse>(url, { method: HTTPMethods.POST, body }),
};
