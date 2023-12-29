import {
  IBlogComment,
  IBlogCommentReply,
} from '../../common/types/blog-comment';

export type IGetBlogCommentsResponse = {
  more: boolean;
  comments: IBlogComment[];
};

export type IGetBlogCommentsRequest = {
  blogId: number;
  queryOption?: {
    timestamp?: string;
    amount?: number;
    parent_comment_id?: number;
  };
};

export type IGetBlogCommentsThunkResponse = {
  parentCommentId?: number;
} & IGetBlogCommentsResponse;

export type IPostBlogCommentRequest = {
  blog: {
    id: number;
  };
  account: {
    id: number;
  };
  content: string;
  parentComment?: IBlogComment;
};

export type IPostBlogCommentResponse = IBlogComment | IBlogCommentReply;
