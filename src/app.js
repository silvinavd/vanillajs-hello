/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import validator from "validator";

window.onload = function() {
  //write your code here
};

/* Variables */

let btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
  e.preventDefault();

  let alert = document.getElementById("alert");
  let card = document.getElementById("card");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let name = document.getElementById("name");
  let lastname = document.getElementById("lastname");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let postalcode = document.getElementById("postalcode");
  /*let master = document.getElementById("master");
  let visa = document.getElementById("visa");
  let diners = document.getElementById("diners");
  let amex = document.getElementById("amex");*/
  let text = document.getElementById("text");

  //Card
  if (validator.isEmpty(card.value)) {
    alert.classList.add("d-block");
    card.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    card.classList.remove("alert-danger");
  }
  //Cvc
  if (validator.isEmpty(cvc.value)) {
    alert.classList.add("d-block");
    cvc.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    cvc.classList.remove("alert-danger");
  }

  //Amount
  if (validator.isEmpty(amount.value)) {
    alert.classList.add("d-block");
    amount.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    amount.classList.remove("alert-danger");
  }

  //Name
  if (validator.isEmpty(name.value)) {
    alert.classList.add("d-block");
    name.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    name.classList.remove("alert-danger");
  }

  //Lastname
  if (validator.isEmpty(lastname.value)) {
    alert.classList.add("d-block");
    lastname.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    lastname.classList.remove("alert-danger");
  }

  //City
  if (validator.isEmpty(city.value)) {
    alert.classList.add("d-block");
    city.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    city.classList.remove("alert-danger");
  }

  //State
  if (validator.isEmpty(state.value)) {
    alert.classList.add("d-block");
    state.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    state.classList.remove("alert-danger");
  }

  //Postalcode

  if (validator.isEmpty(postalcode.value)) {
    alert.classList.add("d-block");
    postalcode.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    postalcode.classList.remove("alert-danger");
  }

  //Text

  if (validator.isEmpty(text.value)) {
    alert.classList.add("d-block");
    text.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    text.classList.remove("alert-danger");
  }
});
