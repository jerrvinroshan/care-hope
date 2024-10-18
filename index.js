const toggleBtn = document.querySelector(".menu__btn");

const toggleBtnIcon = document.querySelector(".menu__btn i");

const toggleMenu = document.querySelector(".mobile__dropdownMenu");

toggleBtn.onclick = function () {
  toggleMenu.classList.toggle("open");
  const isOpen = toggleMenu.classList.contains("open");

  if (isOpen) {
    toggleBtnIcon.classList = "fa-solid fa-xmark";
  } else {
    toggleBtnIcon.classList = "fa-solid fa-bars";
  }
};

const serviceToggleBtn = document.querySelector(
  ".navbar__mobilemenuserviceitems--li"
);

const serviceImgOpen = document.querySelector(".menudropdown--img");

const serviceToggleMenu = document.querySelector(".mobile__dropdownList--ul");

serviceToggleBtn.onclick = function () {
  serviceToggleMenu.classList.toggle("open");
  const serviceOpen = serviceToggleMenu.classList.contains("open");

  if (serviceOpen) {
    serviceImgOpen.classList.add("open");
  } else {
    serviceImgOpen.classList.remove("open");
  }
};
