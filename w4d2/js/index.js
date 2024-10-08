// Ask for the DOM status

// addEventListener === .on()
// XMLHttpRequest
document.addEventListener("DOMContentLoaded", () => {
  const titleOfPage = document.children[0].children[1].children[0].children[0];
  titleOfPage.innerHTML = "Super <em>page</em> 🥔🥔🥔🥔🥔!";

  // Kinda deprecated
  const yukonTitle = document.getElementsByTagName("h1")[2];
  yukonTitle.style.backgroundColor = "#BADA55";

  // Now we use querySelector / querySelectorAll
  const yukonTitleAgain = document.querySelector("article:nth-of-type(3) h1");

  // Object like way! Assign / Write like an object
  yukonTitleAgain.style.backgroundColor;
  yukonTitleAgain.style.backgroundColor = generateRandomColor();

  document.addEventListener("click", (event) => {
    console.log(event.target);

    event.target.style.backgroundColor = generateRandomColor();
  });
});

// the jQuery way

// $(document).on("ready", () => {
$(document).ready(() => {
  const titleOfPage = document.children[0].children[1].children[0].children[0];
  titleOfPage.innerHTML = "Super <em>page</em> 🥔🥔🥔🥔🥔!";

  // Targeting system
  // jQuery and $ are interchangeable
  const fingerlingTitle = $("article:nth-of-type(3) h1");

  // Method approach
  fingerlingTitle.css("background-color"); // Read
  fingerlingTitle.css("background-color", generateRandomColor()); // Write

  // $(document).on('click', event => {
  $(document).click((event) => {
    $(event.target).css("background-color", generateRandomColor());
  });
});
