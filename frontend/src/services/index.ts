import { getToken } from '@/services/token';

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

async function request<TResponse>(url: string, config: RequestInit, body?: BodyInit): Promise<TResponse> {
  const token = await getToken();
  const options = {
    ...config,
    body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  const response = await fetch(url, { ...options, credentials: 'include' });
  if (!response.ok) {
    response.json().then((res) => console.log(res));
    handleError(response.status, response.statusText);
  }
  return response.json();
}

export const api = {
  get: <TResponse>(url: string): Promise<TResponse> => request<TResponse>(url, { method: HTTPMethods.GET }),

  post: <TResponse, TBody>(url: string, bodyObject?: TBody): Promise<TResponse> => {
    const body = JSON.stringify(bodyObject);
    return request<TResponse>(url, { method: HTTPMethods.POST }, body);
  },
};
