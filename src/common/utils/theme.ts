export function getThemeItem() {
  return localStorage.getItem('theme') || 'light';
}

export function setThemeItem(mode: string) {
  localStorage.setItem('theme', mode);
}
