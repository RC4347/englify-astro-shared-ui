export type TServerResponse<T> = {
  ok: boolean;
  status_code: number;
  description: string;
  result: T;
  errors?: Array<{ field: string, message: string }>
}

export type TRegisterPage = {
  id: number;
  title: string;
  extra: { description?: string }|null;
  files: Array<{
    full_url: string;
    size: number;
    type: string;
  }>
}

export type TTeacher = {
  image: string;
  name: string;
  emoji: string;
  bgColor: string;  
  shadowColor: string;  
}

export type TTestimonial = {
  image: string;
  name: string;
  emoji: string;
  youtube: string;
  video_title: string;
}
