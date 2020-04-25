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

function email(value) {
  var emailAddress = decode(value);
  document.write(
    '<a class="middle" href="mailto:' +
      emailAddress +
      '">' +
      emailAddress +
      "</a>"
  );
}
