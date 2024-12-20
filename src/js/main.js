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

// Hidden elements

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

//Modal windows - navbar

const chatModal = document.getElementById("chatModal");
const btnChat = document.getElementById("openChat");
const btnCloseChat = document.getElementsByClassName("modal__close")[0];
const overlayChat = document.querySelector(".blur_modal");

const modal = document.getElementById("myModal");
const btnOpenModal = document.getElementById("openModal");
const btnCloseModal = document.getElementsByClassName("modal__closed")[0];
const blurModal = document.querySelector(".blur_modal");

btnChat.onclick = function () {
  chatModal.style.display = "block";
  overlayChat.style.display = "block";
};

btnCloseChat.onclick = function () {
  chatModal.style.display = "none";
  overlayChat.style.display = "none";
};

btnOpenModal.onclick = function () {
  modal.style.display = "block";
  blurModal.style.display = "block";
};

btnCloseModal.onclick = function () {
  modal.style.display = "none";
  blurModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == overlayChat) {
    chatModal.style.display = "none";
    overlayChat.style.display = "none";
  }

  if (event.target == blurModal) {
    modal.style.display = "none";
    blurModal.style.display = "none";
  }
};

//Modal windows - menu

const chatWindow = document.getElementById("chatModal");
const chat = document.getElementById("chatOpen");
const btnCloseWindow = document.getElementsByClassName("modal__close")[0];
const blurChat = document.querySelector(".blur_modal");

const modalWindow = document.getElementById("myModal");
const btnOpenWindow = document.getElementById("modalOpen");
const closeModal = document.getElementsByClassName("modal__closed")[0];
const blurTel = document.querySelector(".blur_modal");

chat.onclick = function () {
  chatWindow.style.display = "block";
  blurChat.style.display = "block";
};

btnCloseWindow.onclick = function () {
  chatWindow.style.display = "none";
  blurChat.style.display = "none";
};

btnOpenWindow.onclick = function () {
  modalWindow.style.display = "block";
  blurTel.style.display = "block";
};

closeModal.onclick = function () {
  modalWindow.style.display = "none";
  blurTel.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == blurChat) {
    chatWindow.style.display = "none";
    blurChat.style.display = "none";
  }

  if (event.target == blurModal) {
    modalWindow.style.display = "none";
    blurTel.style.display = "none";
  }
};

// Mobile menu

document.getElementById("burger").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  const blurNavbar = document.querySelector(".blur");

  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    blurNavbar.style.display = "none";
  } else {
    navbar.style.display = "block";
    blurNavbar.style.display = "block";
  }
});

document.querySelector(".blur").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  const blurNavbar = document.querySelector(".blur");

  navbar.style.display = "none";
  blurNavbar.style.display = "none";
});

window.addEventListener("resize", function () {
  const navbar = document.getElementById("navbar");
  const blurNavbar = document.querySelector(".blur");

  if (window.innerWidth === 1440) {
    navbar.style.display = "block";
    blurNavbar.style.display = "block";
  } else {
    navbar.style.display = "none";
    blurNavbar.style.display = "none";
  }
});
