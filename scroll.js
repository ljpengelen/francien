function overlap(first, second) {
  var firstRect = first.getBoundingClientRect();
  var secondRect = second.getBoundingClientRect();

  return (
    firstRect.top <= secondRect.bottom && firstRect.bottom >= secondRect.top
  );
}

var elements = document.querySelectorAll("section");
var main = document.querySelector("main");

function show() {
  elements.forEach(function (element) {
    if (overlap(main, element)) {
      element.classList.remove("invisible");
    }
  });
}

main.addEventListener("scroll", show, false);

function hide() {
  elements.forEach(function (element, index) {
    if (index == 0) {
      return;
    }
    element.classList.add("invisible");
  });
}

hide();
