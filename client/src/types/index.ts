export type Post = {
    _id: number;
    title: string;
    content: string;
    category?: string;
  };

export type Api = {
  [key:string]: Array<Post>;
  };

export type CategoryData = {
    _id: number;
    category?: string;
  };
