const message = "KONAMI 4 LYFE";

const secret = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

let currentIndex = 0;

$(document).ready(() => {
  $(document).on("keydown", (event) => {
    if (event.key === secret[currentIndex]) {
      if (event.key === "Enter") {
        $("body").css("background-color", "#BADA55");
        $("header h1").text(message);
        $("header h1").css("fontSize", "100px");
        currentIndex = 0;
      } else {
      }
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  });
});
