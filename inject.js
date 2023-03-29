document.addEventListener("DOMContentLoaded", function() {
  console.log("Freeze site here");
  Object.freeze(document.getElementById("site-content"));
});
