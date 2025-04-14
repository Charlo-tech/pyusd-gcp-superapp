const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '/api';

type ApiConfig = {
  body?: any;
  headers?: Record<string, string>;
};

export const apiService = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${API_BASE}${endpoint}`);
    return handleResponse<T>(response);
  },

  post: async <T>(endpoint: string, config: ApiConfig): Promise<T> => {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
      body: JSON.stringify(config.body),
    });
    return handleResponse<T>(response);
  },
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};