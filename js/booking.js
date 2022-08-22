export function addEventListenersAll() {
  //show pop-up
  let button = document.getElementById("buttonBuyNow");

  button.addEventListener("click", () => {
    let shadowBooking = document.getElementsByClassName("shadow-booking")[0];
    shadowBooking.classList.add("show-shadow-booking");

    let bookingForm = document.getElementsByClassName("pop-up-booking")[0];
    bookingForm.classList.add("show");
  });

  //close pop-up
  let closeButton = document.getElementById("buttonClose");

  closeButton.addEventListener("click", () => {
    let shadowBooking = document.getElementsByClassName("shadow-booking")[0];
    shadowBooking.classList.remove("show-shadow-booking");

    let bookingForm = document.getElementsByClassName("pop-up-booking")[0];
    bookingForm.classList.remove("show");
  });

  //close pop-up through overlay
  let overlay = document.getElementsByClassName("shadow-booking")[0];

  overlay.addEventListener("click", function (e) {
    if (e.target == overlay) {
      let shadowBooking = document.getElementsByClassName("shadow-booking")[0];
      shadowBooking.classList.remove("show-shadow-booking");

      let bookingForm = document.getElementsByClassName("pop-up-booking")[0];
      bookingForm.classList.remove("show");
    }
  });
}

export function managingBooking() {
  //button from tickets
  let buttonBuyNow = document.getElementById("buttonBuyNow");
  //button from tickets

  let tourDate = document.getElementById("idTourDate");
  let tourTime = document.getElementById("idTime");

  let tourName = document.getElementById("idName");
  let spanErrorName = document.querySelector(".error-name");

  let tourEMail = document.getElementById("idEmail");
  let spanErrorEMail = document.querySelector(".error-email");

  let tourPhone = document.getElementById("idPhone");
  let spanErrorPhone = document.querySelector(".error-phone");

  let priceArray = [20, 25, 45];
  let price = priceArray[0];

  let priceUsual = document.querySelector(".price-usual");
  let priceSenior = document.querySelector(".price-senior");

  let amountUsual = document.querySelector(".amount-usual");
  let amountSenior = document.querySelector(".amount-senior");

  let addRemoveButtons = document.querySelectorAll(".add-remove-18");

  let ticketType = document.getElementById("idTicketType");

  //right field

  let ticketTourDate = document.querySelector(".ticket-tour-date");
  let ticketTourTime = document.querySelector(".ticket-tour-time");
  let ticketTicketType = document.querySelector(".ticket-ticket-type");

  tourName.addEventListener("input", checkValidationName);
  tourName.addEventListener("blur", checkValidationName);
  tourName.addEventListener("focus", removeErrorName);

  tourEMail.addEventListener("input", checkValidationEMail);
  tourEMail.addEventListener("blur", checkValidationEMail);
  tourEMail.addEventListener("focus", removeErrorEMail);

  tourPhone.addEventListener("input", checkValidationPhone);
  tourPhone.addEventListener("blur", checkValidationPhone);
  tourPhone.addEventListener("focus", removeErrorPhone);

  let ticketAmountUsual = document.querySelector(".ticket-amount-usual");
  let ticketPriceUsual = document.querySelector(".ticket-price-usual");
  let ticketSumUsual = document.querySelector(".ticket-sum-usual");

  let ticketAmountSenior = document.querySelector(".ticket-amount-senior");
  let ticketPriceSenior = document.querySelector(".ticket-price-senior");
  let ticketSumSenior = document.querySelector(".ticket-sum-senior");

  let ticketSumTotal = document.querySelector(".booking-sum-total");

  amountUsual.value = 1;
  amountSenior.value = 1;

  buttonBuyNow.addEventListener("click", initialize);

  tourDate.addEventListener("input", showDate);
  tourTime.addEventListener("input", showTime);
  ticketType.addEventListener("input", showType);

  for (let button of addRemoveButtons) {
    button.addEventListener("click", changeTicketData);
  }

  /*function countSum() {
    sum.innerText = getSum(ticketsAmountUsual.value, ticketsAmountSenior.value);
  }*/

  function initialize() {
    if (localStorage.getItem("price") != null) {
      price = localStorage.getItem("price");
    }

    if (localStorage.getItem("ticketsAmountUsual") != null) {
      amountUsual.value = localStorage.getItem("ticketsAmountUsual");
    }
    if (localStorage.getItem("ticketsAmountSenior") != null) {
      amountSenior.value = localStorage.getItem("ticketsAmountSenior");
    }

    if (localStorage.getItem("ticketsType") != null) {
      let exType = localStorage.getItem("ticketsType");
      if (exType == 0) {
        ticketType.value = "Permanent exhibition";
      } else if (exType == 1) {
        ticketType.value = "Temporary exhibition";
      } else {
        ticketType.value = "Combined exhibition";
      }
    }

    priceUsual.innerHTML = "Basic 18+ (" + String(price) + " €)";
    priceSenior.innerHTML = "Senior 65+ (" + String(price / 2) + " €)";

    changeTicketData();

    let dateToday = new Date();
    let today =
      String(dateToday.getFullYear()) +
      "-" +
      String(dateToday.getMonth() + 1) +
      "-" +
      String(dateToday.getDate());

    tourDate.min = today;

    ticketTourDate.innerHTML = convertDate(dateToday);
  }
  //validation

  function checkValidationName() {
    let rexExp = /^[А-Яа-яA-Za-z\s]{3,15}$/;

    if (tourName.value.match(rexExp) === null) {
      spanErrorName.innerHTML =
        "You need to use latin or russian alphabet and from 3 up to 15 letters";
      tourName.classList.add("form-control_error");
      spanErrorName.style.display = "block";
    } else {
      tourName.classList.remove("form-control_error");
      spanErrorName.innerHTML = "";
      spanErrorName.style.display = "none";
    }
  }

  function removeErrorName() {
    tourName.classList.remove("form-control_error");
    spanErrorName.innerHTML = "";
    spanErrorName.style.display = "none";
  }

  function checkValidationEMail() {
    let rexExp = /^[\w|-]{3,15}@[A-Z]{4,}\.[A-Z]{2,}$/i;

    if (tourEMail.value.match(rexExp) === null) {
      spanErrorEMail.innerHTML =
        "You need to use latin or alphabet and from 3 up to 15 letters plus @ plus domains";
      tourEMail.classList.add("form-control_error");
      spanErrorEMail.style.display = "block";
    } else {
      tourEMail.classList.remove("form-control_error");
      spanErrorEMail.innerHTML = "";
      spanErrorEMail.style.display = "none";
    }
  }

  function removeErrorEMail() {
    tourEMail.classList.remove("form-control_error");
    spanErrorEMail.innerHTML = "";
    spanErrorEMail.style.display = "none";
  }

  function checkValidationPhone() {
    let rexExp = /^(\d{1,10})$|^((\d{2,3}[-|\s])+(\d{2,3}))$/gm;
    console.log(tourPhone.value.match(rexExp));

    if (tourPhone.value.match(rexExp) === null) {
      spanErrorPhone.innerHTML =
        "You need to use digits up to 10 possibly divided by 2 or 3 plus spaces or hyphens";
      tourPhone.classList.add("form-control_error");
      spanErrorPhone.style.display = "block";
    } else {
      let checkAmount = tourPhone.value.split("-").join("").split(" ").join("");
      if (checkAmount.length > 10) {
        spanErrorPhone.innerHTML =
          "You need to use digits up to 10 possibly divided by 2 or 3 plus spaces or hyphens";
        tourPhone.classList.add("form-control_error");
        spanErrorPhone.style.display = "block";
      } else {
        tourPhone.classList.remove("form-control_error");
        tourPhone.innerHTML = "";
        spanErrorPhone.style.display = "none";
      }
    }
  }

  function removeErrorPhone() {
    tourPhone.classList.remove("form-control_error");
    spanErrorPhone.innerHTML = "";
    spanErrorPhone.style.display = "none";
  }

  //end validation

  //right side

  function showType() {
    ticketTicketType.innerHTML = ticketType.value;

    if (ticketType.value === "Permanent exhibition") {
      price = priceArray[0];
    } else if (ticketType.value === "Temporary exhibition") {
      price = priceArray[1];
    } else {
      price = priceArray[2];
    }
    priceUsual.innerHTML = "Basic 18+ (" + String(price) + " €)";
    priceSenior.innerHTML = "Senior 65+ (" + String(price / 2) + " €)";

    changeTicketData();
  }

  function showDate() {
    ticketTourDate.innerHTML = convertDate(new Date(tourDate.value));
  }

  function showTime() {
    ticketTourTime.innerHTML = tourTime.value.trim();
  }

  function convertDate(chosenDate) {
    let arrWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday ",
      "Friday ",
      "Saturday ",
    ];

    let arrMonth = [
      "January",
      "February",
      "March",
      "April ",
      "May ",
      "June ",
      "July ",
      "August ",
      "September ",
      "October ",
      "November ",
      "December ",
    ];

    return (
      arrWeek[chosenDate.getDay()] +
      ", " +
      arrMonth[chosenDate.getMonth()] +
      " " +
      chosenDate.getDate()
    );
  }

  function changeTicketData() {
    ticketAmountUsual.innerHTML = String(amountUsual.value);
    ticketPriceUsual.innerHTML = "Basic (" + String(price) + " €)";
    ticketSumUsual.innerHTML = String(price * amountUsual.value) + " €";

    ticketAmountSenior.innerHTML = String(amountSenior.value);
    ticketPriceSenior.innerHTML = "Senior (" + String(price / 2) + " €)";
    ticketSumSenior.innerHTML = String((price / 2) * amountSenior.value) + " €";

    ticketSumTotal.innerHTML =
      String(price * amountUsual.value + (price / 2) * amountSenior.value) +
      " €";
  }
}
