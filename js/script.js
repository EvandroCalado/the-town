// === Menu Hamburguer ===
const navbarMenuBtn = document.querySelector(".navbar-menu");
const navbarList = document.querySelector(".navbar-list");
const navbarMenuSpan = document.querySelectorAll(".navbar-menu span");

navbarMenuBtn.addEventListener("click", () => {
  navbarList.classList.toggle("slide");
  navbarMenuBtn.classList.toggle("slide");
  navbarMenuSpan.forEach((span) => {
    span.classList.toggle("slide");
  });
});

// === Galeria Modal ===
const galleryBtns = document.querySelectorAll(".gallery-img-text");
const modal = document.querySelector(".galley-modal");
const wrapModalImg = document.querySelector(".img");
const modalImg = document.querySelector(".img img");
const xBtn = document.querySelector(".ph-x");
const galleryItems = document.querySelectorAll(".gallery-items");
const avancar = document.querySelector(".ph-arrow-right");
const anterior = document.querySelector(".ph-arrow-left");

// === Abrir Modal ===
galleryBtns.forEach((galleryBtn) => {
  galleryBtn.addEventListener("click", () => {
    galleryBtn.previousElementSibling.classList.add("current");
    modalImg.src = galleryBtn.previousElementSibling.src;
    modal.classList.add("activate");
    wrapModalImg.classList.add("activate-2");

    // === Botão próximo ===
    avancar.addEventListener("click", () => {
      let current = document.querySelector(".current");
      current.classList.remove("current");

      if (current.parentElement.nextElementSibling !== null) {
        current.parentElement.nextElementSibling.firstElementChild.classList.add(
          "current"
        );
        console.log(current.parentElement.nextElementSibling.firstElementChild)
        modalImg.src =
          current.parentElement.nextElementSibling.firstElementChild.src;
      } else {
        const imageStart = document.querySelector(".start");
        modalImg.src = imageStart.src;
        imageStart.classList.add("current");
      }
    });

    // === Botão anterior ===
    anterior.addEventListener("click", () => {
      let current = document.querySelector(".current");
      current.classList.remove("current");

      if (current.parentElement.previousElementSibling !== null) {
        current.parentElement.previousElementSibling.firstElementChild.classList.add(
          "current"
        );
        modalImg.src =
          current.parentElement.previousElementSibling.firstElementChild.src;
      } else {
        const imageEnd = document.querySelector(".end");
        modalImg.src = imageEnd.src;
        imageEnd.classList.add("current");
      }
    });

  });
});

// === Fechar modal ===
xBtn.addEventListener("click", () => {
  const currentFechar = document.querySelector(".current");
  console.log(currentFechar)
  currentFechar.classList.remove("current");
  modalImg.src = ""
  modal.classList.remove("activate");
  wrapModalImg.classList.remove("activate-2");
});