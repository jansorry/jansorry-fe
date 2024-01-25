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
  const options = {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, options);
  if (!response.ok) {
    response.json().then((res) => console.log(res));
    handleError(response.status, response.statusText);
  }
  return response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url, { method: HTTPMethods.GET }),

  post: <TBody extends object, TResponse>(url: string, bodyObject: TBody): Promise<TResponse> => {
    const body = JSON.stringify(bodyObject);
    return request<TResponse>(url, { method: HTTPMethods.POST, body });
  },
};
