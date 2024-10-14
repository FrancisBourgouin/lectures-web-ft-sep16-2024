const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
const randomizeColors = () => {
  let root = document.documentElement;

  root.style.setProperty("--primary-color", randomColor());
  root.style.setProperty("--secondary-color", randomColor());
  root.style.setProperty("--primary-background", randomColor());
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", randomizeColors);
});
