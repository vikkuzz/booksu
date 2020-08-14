let btn = document.querySelector(".body__read");
let page = document.querySelector(".body__page");

btn.addEventListener("click", function () {
  page.style.transform = "rotateY(-90deg) skewY(-10deg)";
  //page1.style.display = "block";
  //page1.append(numOfSh());
});
