export function stripHtml(htmlContent: string) {
  const element = document.createElement('div');
  element.innerHTML = htmlContent;
  return element.textContent || element.innerText || "";
}