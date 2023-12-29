import { IAccount } from './account';
import { IBlog } from './blog';

export type IBlogComment = {
  id: number;

  blog: IBlog;

  account: IAccount;

  content: string;

  createTime: string;

  editTime?: string;

  replies: IBlogCommentReply[];
};

export type IBlogCommentReply = Omit<IBlogComment, 'replies'> & {
  parentComment: IBlogComment;
};
