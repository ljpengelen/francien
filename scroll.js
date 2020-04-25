function overlap(first, second) {
  var firstRect = first.getBoundingClientRect();
  var secondRect = second.getBoundingClientRect();

  return (
    firstRect.top <= secondRect.bottom && firstRect.bottom >= secondRect.top
  );
}

var elements = document.querySelectorAll("section");
var main = document.querySelector("main");

main.addEventListener(
  "scroll",
  function (event) {
    elements.forEach(function (element) {
      if (overlap(main, element)) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  },
  false
);
