export function managingTickets() {
  let ticketsType = document.querySelectorAll(".class-ticket-type");

  let ticketsAmountUsual = document.getElementById("idTicketsUsual");
  let ticketsAmountSenior = document.getElementById("idTicketsSenior");
  let exType;

  let addRemoveButtons = document.querySelectorAll(".add-remove");
  let sum = document.getElementById("total2");

  function checkTypeByNumber(number = 1) {
    for (let i = 0; i < ticketsType.length; i++) {
      ticketsType[i].checked = i == number ? true : false;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("ticketsType") != null) {
      if (localStorage.getItem("ticketsType") != undefined) {
        let savedType = localStorage.getItem("ticketsType");
        checkTypeByNumber(savedType);
      } else {
        checkTypeByNumber(1);
      }
    } else {
      checkTypeByNumber(1);
    }

    if (localStorage.getItem("ticketsAmountUsual") != null) {
      ticketsAmountUsual.value = localStorage.getItem("ticketsAmountUsual");
    } else {
      ticketsAmountUsual.value = 1;
    }
    if (localStorage.getItem("ticketsAmountSenior") != null) {
      ticketsAmountSenior.value = localStorage.getItem("ticketsAmountSenior");
    } else {
      ticketsAmountSenior.value = 1;
    }

    sum.innerText = getSum(ticketsAmountUsual.value, ticketsAmountSenior.value);
  });

  let priceArray = [20, 25, 45];

  for (let type of ticketsType) {
    type.addEventListener("click", countSum);
  }

  function getPrice() {
    let price = 0;
    for (let i = 0; i < 3; i++) {
      if (ticketsType[i].checked) {
        price = priceArray[i];
        exType = i;
      }
    }

    return price;
  }

  function getSum(varTicketsAmountUsual, varTicketsAmountSenior) {
    let price = getPrice();

    localStorage.setItem("ticketsAmountUsual", varTicketsAmountUsual);
    localStorage.setItem("ticketsAmountSenior", varTicketsAmountSenior);
    localStorage.setItem("ticketsType", exType);

    localStorage.setItem("price", price);

    return String(
      varTicketsAmountUsual * price + (varTicketsAmountSenior * price) / 2
    );
  }

  for (let button of addRemoveButtons) {
    button.addEventListener("click", countSum);
  }

  function countSum() {
    sum.innerText = getSum(ticketsAmountUsual.value, ticketsAmountSenior.value);
  }
}
