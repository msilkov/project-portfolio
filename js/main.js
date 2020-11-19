// burger menu

$(document).ready(function () {
  const menuToggle = document.querySelector(".toggle-menu");
  const mobMenu = document.querySelector(".header-navigation");
  const overlayEl = document.querySelector("#overlay");
  const bodyEl = document.body;
  //   gamburger click
  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    mobMenu.classList.toggle("active");
    overlayEl.classList.toggle("active");
    bodyEl.classList.toggle("noscroll");
  });
  //   mobmenu click
  mobMenu.addEventListener("click", function () {
    this.classList.remove("active");
    menuToggle.classList.remove("active");
    overlayEl.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  });
  //   resize close
  window.addEventListener("resize", function () {
    mobMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    overlayEl.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  });
  //   overlay closing
  overlayEl.addEventListener("click", function () {
    this.classList.remove("active");
    menuToggle.classList.remove("active");
    mobMenu.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  });
  //   header bgc on scroll
  const fixMenu = document.querySelector(".fixed-menu");

  window.addEventListener("scroll", function () {
    if (this.pageYOffset > 10) {
      fixMenu.classList.add("active");
    } else {
      fixMenu.classList.remove("active");
    }
  });

  //-фильтрация проектов
  let containerEl = document.querySelector("#portfolio-projects");

  let mixer = mixitup(containerEl, {
    classNames: {
      block: "",
    },
  });

  // - выравниваем   ширину карточек при фильтрации
  const filterToggles = document.querySelectorAll(
    ".portfolio-works-toggle button"
  ); // все кнопки-переключатели
  const portfolioBigCards = document.querySelectorAll(
    ".portfolio-works__item "
  ); // вс карточки  работ

  for (let i = 0; i < filterToggles.length; i++) {
    filterToggles[i].addEventListener("click", function () {
      if (i == 0) {
        for (let j = 0; j < 2; j++) {
          portfolioBigCards[j].classList.add("portfolio-works__item--big");
        }
      } else {
        for (let j = 0; j < 2; j++) {
          portfolioBigCards[j].classList.remove("portfolio-works__item--big");
        }
      }
    });
  }
});

// FORM PLACEHOLDER

const formInputs = document.querySelectorAll(".form__field");
for (let item of formInputs) {
  const thisPlaceholder = item.nextElementSibling;

  item.addEventListener("focus", function () {
    thisPlaceholder.classList.add("active");
  });
  item.addEventListener("blur", function () {
    if (item.value == "") {
      thisPlaceholder.classList.remove("active");
    }
  });
}
