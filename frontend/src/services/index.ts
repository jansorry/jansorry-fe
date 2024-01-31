import { getServerToken, getToken } from '@/services/token';

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

async function requestClient<T>(
  url: string,
  config: RequestInit,
  body?: BodyInit,
): Promise<T> {
  const needToken = !(url.includes(`login`) || url.includes(`signup`));
  const options = { ...config, body };

  if (needToken) {
    const token = await getToken();
    options.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } else {
    options.headers = { 'Content-Type': 'application/json' };
  }

  const response = await fetch(`/api${url}`, {
    ...options,
    credentials: 'include',
  });
  if (!response.ok) {
    response.json().then((res) => console.log(res));
    handleError(response.status, response.statusText);
  }
  return response.json();
}

async function requestServer<T>(
  url: string,
  config: RequestInit,
  refreshToken: string,
  body?: BodyInit,
): Promise<T> {
  const options = { ...config, body };
  const token = await getServerToken(refreshToken);
  options.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
    ...options,
    credentials: 'include',
  });
  if (!response.ok) {
    response.json().then((res) => console.log(res));
    handleError(response.status, response.statusText);
  }
  return response.json();
}

export const apiClient = {
  get: <TResponse>(url: string): Promise<TResponse> =>
    requestClient<TResponse>(url, { method: HTTPMethods.GET }),

  post: <TResponse, TBody>(
    url: string,
    bodyObject?: TBody,
  ): Promise<TResponse> => {
    const body = JSON.stringify(bodyObject);
    return requestClient<TResponse>(url, { method: HTTPMethods.POST }, body);
  },
};

export const apiServer = {
  get: <T>(url: string, token: string): Promise<T> =>
    requestServer<T>(url, { method: HTTPMethods.GET }, token),

  post: <T, U>(url: string, token: string, bodyObject?: U): Promise<T> => {
    const body = JSON.stringify(bodyObject);
    return requestServer<T>(url, { method: HTTPMethods.POST }, token, body);
  },
};
