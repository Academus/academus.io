// https://stackoverflow.com/a/21742107/2449940
function getOs() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

  if (/windows phone/i.test(userAgent)) return "Windows Phone"
  if (/android/i.test(userAgent)) return "Android"
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS"

  return "unknown"
}

var os = getOs()

switch(os) {
  case "iOS":
    $(".platform-ios").addClass("unmuted")
    break
  case "Android":
    $(".platform-android").addClass("unmuted")
    break
}