$(function () {
  if ($("#skills").length) {
    $(".chart").easyPieChart({
      barColor: "#ffb400",
      trackColor: "#252525",
      lineWidth: "9",
      lineCap: "square",
      scaleColor: "false",
      size: "140",
    });
  }

  if ($("#portfolio").length) {
    $(".snake").snakeify({
      speed: 400,
    });
  }

  //header navbar
  $(".open").click(function () {
    $(".nav-list").toggle();

    // $(".nav-list").css("top", "0");
  });
});

//navbar active class
const liTag = document.querySelectorAll(".nav-item a ");
const icon = document.querySelectorAll(".nav-item a i")
const currentLoaction = location.href;
const menuLength = liTag.length;

for (let i = 0; i < menuLength; i++) {
  if (liTag[i].href === currentLoaction) {
    icon[i].classList.add("active");
  }
}


// blog page pagination active class
const ulTag = document.querySelector(".numbers-wrapper");
const numbers = document.querySelectorAll(".numbers");

numbers.forEach((num) => {
  num.addEventListener("click", function () {
    ulTag.querySelector(".activePage").classList.remove("activePage");
    num.classList.add("activePage");
  });
});
