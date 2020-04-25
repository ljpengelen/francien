function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

var elements = document.querySelectorAll("section");
var main = document.querySelector("main");

main.addEventListener(
  "scroll",
  function (event) {
    elements.forEach(function (element) {
      if (isInViewport(element)) {
        console.log("in viewport", element);
        element.classList.add("visible");
      }
    });
  },
  false
);
