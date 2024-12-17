export interface FormData {
  title: string;
  content?: string | null;
}

export interface Todo {
  title: string;
  content?: string | null;
  slug: string;
  userEmail: string;
}