export interface IPlatformProfile {
  id: number;

  platform: IPlatform;

  platformUserId: number;

  username: string;

  avatarUrl: string;

  accessToken: string;
}

export type IPlatform = 'qq' | 'wechat' | 'github';
