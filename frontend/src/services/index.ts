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
  // /로 시작하면 client component에서 호출, Full URL이면 server component에서 호출
  const isServer = !url.startsWith('/');
  const needToken = !(url.includes(`login`) || url.includes(`signup`));
  const options = { ...config, body };

  if (needToken) {
    const token = await getToken(isServer);
    options.headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };
  } else {
    options.headers = { 'Content-Type': 'application/json' };
  }

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
