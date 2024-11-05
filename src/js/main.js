import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const showAllButton = document.querySelector(".list__button_show-all");
  const hideAllButton = document.querySelector(".list__button_hide-all");
  const hiddenItems = document.querySelectorAll(".hidden");

  showAllButton.addEventListener("click", function () {
    hiddenItems.forEach((item) => {
      item.classList.remove("hidden");
    });
    showAllButton.style.display = "none";
    hideAllButton.style.display = "block";
  });

  hideAllButton.addEventListener("click", function () {
    hiddenItems.forEach((item) => {
      item.classList.add("hidden");
    });
    hideAllButton.style.display = "none";
    showAllButton.style.display = "block";
  });
});

let swiperInstance;
function initSwiper() {
  if (window.innerWidth <= 768 && !swiperInstance) {
    swiperInstance = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 2,
      spaceBetween: 10,
    });
  } else if (window.innerWidth > 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

document.addEventListener("DOMContentLoaded", initSwiper);

window.addEventListener("resize", function () {
  initSwiper();
});

document.addEventListener("DOMContentLoaded", function () {
  const showAllButton = document.querySelector(".list__button_show");
  const hideAllButton = document.querySelector(".list__button_hide");
  const hiddenItems = document.querySelectorAll(".device__item_hidden");

  showAllButton.addEventListener("click", function () {
    hiddenItems.forEach((item) => {
      item.classList.remove("device__item_hidden");
    });
    showAllButton.style.display = "none";
    hideAllButton.style.display = "block";
  });

  hideAllButton.addEventListener("click", function () {
    hiddenItems.forEach((item) => {
      item.classList.add("device__item_hidden");
    });
    hideAllButton.style.display = "none";
    showAllButton.style.display = "block";
  });
});

const menuOpenBtn = document.querySelector(".navbar");
const menuCloseBtn = document.querySelector(".menu__burger");
const menuCloseBlur = document.querySelector(".blur");

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", toogleMenu);
menuCloseBlur?.addEventListener("click", closeMenu);
const navBody = document.querySelector(".navbar");

// Read more

document.getElementById("toggleButton").addEventListener("click", function () {
  const about = document.getElementById("about");
  if (about.classList.contains("about_hidden")) {
    about.classList.remove("about_hidden");
  } else {
    about.classList.add("about_hidden");
  }
});

export function openMenu() {
  if (navBody)
    navBody.style.boxShadow =
      "16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02)";
  document.querySelector(".navbar").style.left = "0";
  setTimeout(() => {
    if (menuCloseBlur) menuCloseBlur.style.display = "block";
  }, 500);
}

function closeMenu() {
  if (menuCloseBlur) menuCloseBlur.style.display = "none";
  if (window.innerWidth > 1440) {
    document.querySelector(".navbar").style.left = "-320px";
  } else document.querySelector(".navbar").style.left = "-360px";
  if (navBody) navBody.style.boxShadow = "none";
}

function toogleMenu() {
  console.log(navBody?.style.left);
  if (navBody.style.left == "-320px") {
    openMenu();
    console.log(5555);
  } else {
    closeMenu();
  }
}
