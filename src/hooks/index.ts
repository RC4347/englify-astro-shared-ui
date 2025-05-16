import type {TRegisterPage, TServerResponse, TTeacher, TTestimonial} from '../types/index';
export const getPage = async (apiUrl: string, apiToken: string, uuid: string|undefined) => {
  const response = await fetch(`${apiUrl ?? ''}/system/v1/register-app-page/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-token': apiToken ?? '',
    },
  });
  const data: TServerResponse<TRegisterPage> = await response.json();
  if (data?.ok) {
    return data
  }
  return [];
}

export const getTestimonials = async (apiUrl: string, apiToken: string): Promise<TTestimonial[]> => {
  const response = await fetch(`${apiUrl ?? ''}/system/v1/public-page/get-testimonials`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-token': apiToken ?? '',
    },
  });
  const data: TServerResponse<TTestimonial[]> = await response.json();
  if (data?.ok) {
    return data.result
  }
  return [];
}

export const getTeachers = async (apiUrl: string, apiToken: string): Promise<TTeacher[]> => {
  const response = await fetch(`${apiUrl ?? ''}/system/v1/public-page/get-teachers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-token': apiToken ?? '',
    },
  });
  const data: TServerResponse<TTeacher[]> = await response.json();
  if (data?.ok) {
    return data.result
  }
  return [];
}
