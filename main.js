// Selectors
let cardForm = document.querySelector(".cardForm");
let holderName = document.getElementById("holderName");
let cardNum = document.getElementById("cardNumber");
let monthYear = document.getElementById("monthYear");
let cvcSpan = document.getElementById("cvcSpan");
let thanks = document.querySelector(".thanks");

// Alerts Paragraph
let nameAlert = document.querySelector(".nameAlert");
let cardNumAlert = document.querySelector(".cardNumAlert");
let mmyyAlert = document.querySelector(".mmyyAlert");
let cvcAlert = document.querySelector(".cvcAlert");

// Input Fields
let nameInpt = document.getElementById("name");
let numInpt = document.getElementById("number");
let monthInpt = document.getElementById("mm");
let yearInpt = document.getElementById("yy");
let cvcInpt = document.getElementById("cvc");
let submitBtn = document.getElementById("submitt");
let continueBtn = document.getElementById("continue");

let inpts = Array.from(document.querySelectorAll("input"));

function theChecker() {
  if (nameInpt.value === "") {
    nameAlert.innerHTML = "Can't be blank!";
    holderName.innerHTML = "Cardholder Name";
    nameInpt.classList.add("input--error");
  } else if (/^[a-zA-Z\s]+$/.test(nameInpt.value) === true) {
    nameAlert.innerHTML = "";
    holderName.innerHTML = nameInpt.value;
    nameInpt.classList.remove("input--error");
  } else {
    nameAlert.innerHTML = "Please type cardholder name correct!";
    holderName.innerHTML = "Cardholder Name";
    nameInpt.classList.add("input--error");
  }
  if (numInpt.value === "") {
    cardNumAlert.innerHTML = "Can't be blank!";
    cardNum.innerHTML = "0000 0000 0000 0000";
    numInpt.classList.add("input--error");
  } else if (/^[0-9]{16}$/.test(numInpt.value) === true) {
    cardNumAlert.innerHTML = "";
    cardNum.innerHTML = numInpt.value.match(/.{1,4}/g).join(" ");
    numInpt.classList.remove("input--error");
  } else {
    cardNumAlert.innerHTML = "Wrong Card Number!";
    cardNum.innerHTML = "0000 0000 0000 0000";
    numInpt.classList.add("input--error");
  }
  if (monthInpt.value == "") {
    monthInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Can't be blank!";
  } else if (
    /^[0-9]{2}$/.test(monthInpt.value) === false ||
    parseInt(monthInpt.value) > 12
  ) {
    monthInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Wrong Exp.Date Format";
    monthYear.innerHTML = "MM/YY";
  } else {
    monthInpt.classList.remove("input--error");
    mmyyAlert.innerHTML = "";
    monthYear.innerHTML = `${monthInpt.value}/${yearInpt.value}`;
  }
  if (yearInpt.value == "") {
    yearInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Can't be blank!";
  } else if (
    /^[0-9]{2}$/.test(yearInpt.value) === false ||
    parseInt(yearInpt.value) < 22
  ) {
    yearInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Wrong Exp.Date Format";
    monthYear.innerHTML = "MM/YY";
  } else {
    yearInpt.classList.remove("input--error");
    mmyyAlert.innerHTML = "";
    monthYear.innerHTML = `${monthInpt.value}/${yearInpt.value}`;
  }
  if (cvcInpt.value == "") {
    cvcInpt.classList.add("input--error");
    cvcAlert.innerHTML = "Can't be blank!";
  } else if (/^[0-9]{3}$/.test(cvcInpt.value) === true) {
    cvcInpt.classList.remove("input--error");
    cvcAlert.innerHTML = "";
    cvcSpan.innerHTML = cvcInpt.value;
  } else {
    cvcInpt.classList.add("input--error");
    cvcAlert.innerHTML = "Wrong CVC Format!";
    cvcSpan.innerHTML = "CVC";
  }

  function errDetect() {
    inpts.forEach((ele) => {
      if (
        ele.classList.contains("input--error") ||
        /^[a-zA-Z\s]+$/.test(nameInpt.value) === false ||
        /^[0-9]{16}$/.test(numInpt.value) === false ||
        /^[0-9]{2}$/.test(monthInpt.value) === false ||
        /^[0-9]{2}$/.test(yearInpt.value) === false ||
        /^[0-9]{3}$/.test(cvcInpt.value) === false ||
        parseInt(monthInpt.value) > 12 ||
        parseInt(yearInpt.value) < 22
      ) {
        return false;
      } else {
        cardForm.style.display = "none";
        thanks.style.display = "block";
      }
    });
  }

  errDetect();
}

nameInpt.onchange = function () {
  if (nameInpt.value === "") {
    nameAlert.innerHTML = "Can't be blank!";
    holderName.innerHTML = "Cardholder Name";
    nameInpt.classList.add("input--error");
  } else if (/^[a-zA-Z\s]+$/.test(nameInpt.value) === true) {
    nameAlert.innerHTML = "";
    holderName.innerHTML = nameInpt.value;
    nameInpt.classList.remove("input--error");
  } else {
    nameAlert.innerHTML = "Please type cardholder name correct!";
    holderName.innerHTML = "Cardholder Name";
    nameInpt.classList.add("input--error");
  }
};
numInpt.onchange = function () {
  if (numInpt.value === "") {
    cardNumAlert.innerHTML = "Can't be blank!";
    cardNum.innerHTML = "0000 0000 0000 0000";
    numInpt.classList.add("input--error");
  } else if (/^[0-9]{16}$/.test(numInpt.value) === true) {
    cardNumAlert.innerHTML = "";
    cardNum.innerHTML = numInpt.value.match(/.{1,4}/g).join(" ");
    numInpt.classList.remove("input--error");
  } else {
    cardNumAlert.innerHTML = "Wrong Card Number!";
    cardNum.innerHTML = "0000 0000 0000 0000";
    numInpt.classList.add("input--error");
  }
};
monthInpt.onchange = function () {
  if (monthInpt.value == "") {
    monthInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Can't be blank!";
  } else if (
    /^[0-9]{2}$/.test(monthInpt.value) === false ||
    parseInt(monthInpt.value) > 12
  ) {
    monthInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Wrong Exp.Date Format";
    monthYear.innerHTML = "MM/YY";
  } else {
    monthInpt.classList.remove("input--error");
    mmyyAlert.innerHTML = "";
    monthYear.innerHTML = `${monthInpt.value}/${yearInpt.value}`;
  }
};
yearInpt.onchange = function () {
  if (yearInpt.value == "") {
    yearInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Can't be blank!";
  } else if (
    /^[0-9]{2}$/.test(yearInpt.value) === false ||
    parseInt(yearInpt.value) < 22
  ) {
    yearInpt.classList.add("input--error");
    mmyyAlert.innerHTML = "Wrong Exp.Date Format";
    monthYear.innerHTML = "MM/YY";
  } else {
    yearInpt.classList.remove("input--error");
    mmyyAlert.innerHTML = "";
    monthYear.innerHTML = `${monthInpt.value}/${yearInpt.value}`;
  }
};

cvcInpt.onchange = function () {
  if (cvcInpt.value == "") {
    cvcInpt.classList.add("input--error");
    cvcAlert.innerHTML = "Can't be blank!";
  } else if (/^[0-9]{3}$/.test(cvcInpt.value) === true) {
    cvcInpt.classList.remove("input--error");
    cvcAlert.innerHTML = "";
    cvcSpan.innerHTML = cvcInpt.value;
  } else {
    cvcInpt.classList.add("input--error");
    cvcAlert.innerHTML = "Wrong CVC Format!";
    cvcSpan.innerHTML = "CVC";
  }
};

submitBtn.onclick = function () {
  theChecker();
};
continueBtn.onclick = function () {
  cardForm.style.display = "flex";
  thanks.style.display = "none";

  inpts.forEach(function (ele) {
    ele.value = "";
  });
  holderName.innerHTML = "Cardholder Name";
  cardNum.innerHTML = "0000 0000 0000 0000";
  monthYear.innerHTML = "MM/YY";
  cvcSpan.innerHTML = "CVC";
};

nameInpt.onfocus = function removePlaceholder() {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
nameInpt.onblur = function addPlaceholder() {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.removeAttribute("data-place");
};
numInpt.onfocus = function removePlaceholder() {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
numInpt.onblur = function addPlaceholder() {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.removeAttribute("data-place");
};
monthInpt.onfocus = function removePlaceholder() {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
monthInpt.onblur = function addPlaceholder() {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.removeAttribute("data-place");
};
yearInpt.onfocus = function removePlaceholder() {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
yearInpt.onblur = function addPlaceholder() {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.removeAttribute("data-place");
};
cvcInpt.onfocus = function removePlaceholder() {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
cvcInpt.onblur = function addPlaceholder() {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.removeAttribute("data-place");
};
