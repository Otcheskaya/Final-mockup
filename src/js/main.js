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
