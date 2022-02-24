// Menu

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".page-header__toggle");
const navClose = document.querySelector(".main-nav__toggle");
const showNav = document.querySelector(".main-nav__wrapper");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    showNav.classList.add("main-nav__wrapper--show");
  } else {
    navMain.classList.add("main-nav--closed");
    showNav.classList.remove("main-nav__wrapper--show");
  }
});

navClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.add("main-nav--closed");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (showNav.classList.contains("main-nav__wrapper--show")) {
      navMain.classList.add("main-nav--closed");
      showNav.classList.remove("main-nav__wrapper--show");
    }
  }
});


// Modal

const modal = document.querySelector(".modal-wrapper");
const modalClose = modal.querySelector(".modal-wrapper__close");
const buyTour = document.querySelectorAll(".button--buy");

const modalForm = modal.querySelector("form");
const modalFormSubmit = document.querySelector(".modal-wrapper");
const modalSuccess = document.querySelector(".modal-wrapper__success");
const feedbackForm = document.querySelector(".form__feedback");


buyTour.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-wrapper--show");
  });
});


modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-wrapper--show");
  modalSuccess.classList.remove("modal-wrapper__success--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-wrapper--show")) {
      modal.classList.remove("modal-wrapper--show");
    }
    modalSuccess.classList.remove("modal-wrapper__success--show");
  }
});


// Отправка формы
modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  modalSuccess.classList.add("modal-wrapper__success--show");
  modalForm.reset();
});

feedbackForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  modal.classList.add("modal-wrapper--show");
  modalSuccess.classList.add("modal-wrapper__success--show");
  feedbackForm.reset();
});


// Переключение табов

let tab = document.querySelectorAll(".tours-list__item");
let content = document.querySelectorAll(".tour-card");

tab.forEach(function(tab, i) {
  tab.addEventListener("click", function() {
    hideTab();
    this.classList.add("tours-list__item--current");
    content[i].classList.add("tour-card--show");
  });
});

function hideTab() {
  tab.forEach((item) => {
    item.classList.remove("tours-list__item--current");
  });
  content.forEach((item) => {
    item.classList.remove("tour-card--show");
  });
}


// Маска для номера телефона

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.form__input--tel'), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "(___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
