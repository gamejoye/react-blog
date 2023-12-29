import { IPlatformProfile } from './platform-profile';

export interface IAccount {
  id: number;

  platformProfile: IPlatformProfile;

  webUrl?: string;

  description?: string;

  createTime: string;

  editTime?: string;
}
