export function createElement(tag, classes = [], attributes = {}, text = '') {
  const element = document.createElement(tag);
  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}