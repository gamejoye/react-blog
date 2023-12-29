import { IFolder } from './folder';
import { ITag } from './tag';

export interface IBlog {
  id: number;

  title: string;

  content: string;

  tags: ITag[];

  priority: number;

  views: number;

  folders: IFolder[];

  createTime: string;

  commentsCount: number;
}
