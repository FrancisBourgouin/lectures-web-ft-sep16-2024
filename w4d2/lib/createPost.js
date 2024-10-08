const createPost = (title, text, isSponsored) => {
  const article = document.createElement("article");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = title;
  p.innerText = text;

  if(isSponsored){
    article.classList.add("sponsored")
  }

  article.appendChild(h1);
  article.appendChild(p);

  return article;
};

const createPostJQ = (title, text) => {
  const article = $("<article>");
  const h1 = $("<h1>");
  const p = $("<p>");

  h1.text(title);
  p.text(text);

  article.append(h1);
  article.append(p);

  return article;
};
