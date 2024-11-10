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
      slidesPerView: 1,
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

// Read more

document.getElementById("toggleButton").addEventListener("click", function () {
  const about = document.getElementById("about");
  if (about.classList.contains("about_hidden")) {
    about.classList.remove("about_hidden");
  } else {
    about.classList.add("about_hidden");
  }
});

//Modal windows

// Получаем элементы для первого модального окна
const chatModal = document.getElementById("chatModal");
const btnChat = document.getElementById("openChat");
const btnCloseChat = document.getElementsByClassName("modal__close")[0];
const overlayChat = document.querySelector(".blur");

// Получаем элементы для второго модального окна
const modal = document.getElementById("myModal");
const btnOpenModal = document.getElementById("openModal");
const btnCloseModal = document.getElementsByClassName("modal__closed")[0];
const blurModal = document.querySelector(".blur");

// Функция для открытия первого модального окна
btnChat.onclick = function () {
  chatModal.style.display = "block";
  overlayChat.style.display = "block";
};

// Функция для закрытия первого модального окна
btnCloseChat.onclick = function () {
  chatModal.style.display = "none";
  overlayChat.style.display = "none";
};

// Функция для открытия второго модального окна
btnOpenModal.onclick = function () {
  modal.style.display = "block";
  blurModal.style.display = "block";
};

// Функция для закрытия второго модального окна
btnCloseModal.onclick = function () {
  modal.style.display = "none";
  blurModal.style.display = "none";
};

// Обработчик кликов по окну
window.onclick = function (event) {
  // Проверяем клик по области наложения первого модального окна
  if (event.target == overlayChat) {
    chatModal.style.display = "none";
    overlayChat.style.display = "none";
  }

  // Проверяем клик по области наложения второго модального окна
  if (event.target == blurModal) {
    modal.style.display = "none";
    blurModal.style.display = "none";
  }
};
