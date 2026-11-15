export interface Artwork {
  id: string;
  image_path: string;
  name: string;
}

export interface POST {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const enum SearchboxTypes {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
}
