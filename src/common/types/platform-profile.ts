export interface IPlatformProfile {
  id: number;

  platform: IPlatform;

  platformUserId: number;

  name: string;

  avatarUrl: string;

  createTime: string;

  editTime?: string;
}

export type IPlatform = 'qq' | 'wechat' | 'github';
