function overlap(first, second) {
  var firstRect = first.getBoundingClientRect();
  var secondRect = second.getBoundingClientRect();

  return (
    firstRect.top <= secondRect.bottom && firstRect.bottom >= secondRect.top
  );
}

var elements = document.querySelectorAll(".animate");
var main = document.querySelector("main");

function show() {
  elements.forEach(function (element) {
    if (overlap(main, element)) {
      element.classList.remove("invisible");
    } else {
      element.classList.add("invisible");
    }
  });
}

main.addEventListener("scroll", show, false);

function hide() {
  elements.forEach(function (element, index) {
    if (index % 2 == 0) {
      element.classList.add("animate-left");
    } else {
      element.classList.add("animate-right");
    }
    element.classList.add("invisible");
  });
}

hide();
