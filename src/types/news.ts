export type News = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  published: boolean;
  created_at: string;
};

export type NewsInput = {
  title: string;
  content: string;
  image_url?: string;
  published?: boolean;
};
