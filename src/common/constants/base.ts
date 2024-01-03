export const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081/'
    : 'https://gamejoye.top:8080/';
// github 第三方登录回调地址
export const GITHUB_AUTH_CALLBACK =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081/auth/github'
    : 'https://gamejoye.top:8080/auth/github';
// github 仓库地址
export const GITHUB_URL = 'https://github.com/gamejoye';
// qq邮箱
export const QQ_EMAIL = '3032535923@qq.com';
// gmail邮箱
export const GMAIL = 'gamejoye@gmail.com';
