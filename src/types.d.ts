interface IPost {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
}

type PostList = {
    posts: IPost[];
};

type CreatePost = {
    username: string;
    title: string;
    content: string;
};

type UpdatePost = {
    id: number;
    data: Omit<ICreatePost, "username">;
};

type DeletePost = {
    id: number;
};

type GetPosts = {
    offset?: string;
};

interface IUser {
    username: string;
}

type IModalPost =
    | {
          isOpen: boolean;
          type: "update" | "delete";
          data: IPost;
      }
    | {
          isOpen: boolean;
          type: "";
          data?: null;
      };
