function decode(value) {
  var aa = value;
  var bb =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ @#$^&*()-_=+.:1234567890";
  var cc =
    "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA +=_-)(*&^$#@:.0987654321";
  var dd;
  var hh;
  var ii;
  var jj = "";
  var ff = aa.length;
  var ee = 0;
  var gg = 1;
  while (ee != ff) {
    dd = aa.substring(ee, gg);
    hh = cc.indexOf(dd);
    ii = bb.charAt(hh);
    ee++;
    gg++;
    jj += ii;
  }
  return jj;
}

var mailElements = document.querySelectorAll(".email");

mailElements.forEach(function (element) {
  var encodedAddress = element.getAttribute("data-address");
  var address = decode(encodedAddress);
  element.innerHTML = '<a href="mailto:' + address + '">' + address + "</a>";
});
