"use strict";

// ELEMENTS
const form = document.querySelector(`.form__form`);
const emailInput = document.querySelector(`.form__input`);
const errorMessage = document.querySelector(`.form__error-message`);
const popup = document.querySelector(`.form__popup`);
const popupEmail = document.querySelector(`.form__popup-email`);
const dismissBtn = document.querySelector(`.form__popup-button`);
const formContainer = document.querySelector(`.form__container`);

// SUBMIT
form.addEventListener(`submit`, function (event) {
  event.preventDefault();
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("has-error");
    errorMessage.classList.remove("visible");
    return;
  } else {
    emailInput.classList.remove("has-error");
    errorMessage.classList.remove("visible");
    console.log("Formularz został wysłany!");

    popupEmail.textContent = emailInput.value;
    popup.classList.remove("hidden");
    formContainer.classList.add("hidden");
  }
});

// INPUT
emailInput.addEventListener("input", () => {
  if (emailInput.value !== "" && !emailInput.checkValidity()) {
    emailInput.classList.add("has-error");
    errorMessage.classList.add("visible");
  } else {
    emailInput.classList.remove("has-error");
    errorMessage.classList.remove("visible");
  }
});

// DISMISS

dismissBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  formContainer.classList.remove("hidden");
  form.reset();
});
