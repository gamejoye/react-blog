export function getGithubToken() {
  return localStorage.getItem('github-auth-token');
}
export function setGithubToken(token: string) {
  localStorage.setItem('github-auth-token', token);
}
