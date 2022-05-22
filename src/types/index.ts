export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Post = {
  _id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: User;
  updatedBy?: User;
};

export type Users = User[];
export type Posts = Post[];
