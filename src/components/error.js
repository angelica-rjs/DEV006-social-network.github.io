// file error.js
export function error(navigateTo) {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page no found, please go home';
  return title;
}
