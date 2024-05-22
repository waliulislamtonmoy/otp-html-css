const toggolerBtn = document.getElementById("checkbox1");

toggolerBtn.addEventListener("click", function () {
  var root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  const isRed = rootStyle.getPropertyValue("--theme-bg");
  if (isRed === "#e0e0e0") {
    root.style.setProperty("--theme-bg", "red");
  } else {
    root.style.setProperty("--theme-bg", "#e0e0e0");
  }
});
