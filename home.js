document
  .getElementById("add-bank-select")
  .addEventListener("click", function () {
    document.getElementById("first-bank-option").style.display = "none";
  });

const pinNumber = 4444; // to get access from any code block

// --------------for Add Money-----------

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const selectedBank = document.getElementById("add-bank-select").value;
    console.log(selectedBank);

    const givenBankAccountNo = parseInt(
      document.getElementById("bank-account-no").value
    );
    console.log(givenBankAccountNo);

    const addAmount = parseInt(document.getElementById("add-amount").value);
    console.log(addAmount);

    const givenPinNumber = parseInt(document.getElementById("add-pin").value);
    console.log(givenPinNumber);

    const bankAccountNo = 22233322211;

    if (givenPinNumber !== pinNumber) {
      alert("Invalid Pin");
      return;
    } else if (givenBankAccountNo !== bankAccountNo) {
      alert("Invalid Account Number");
      return;
    }

    // things to be passed after condition validation
    const currentMoney = parseInt(
      document.getElementById("current-money").innerText
    );
    console.log(currentMoney);

    const updateCurrentMoney = currentMoney + addAmount;
    document.getElementById("current-money").innerText = updateCurrentMoney;
  });

// toggle feature

const addCard = document.getElementById("add-card");
const addCardSection = document.getElementById("add-money");
const cashOutCard = document.getElementById("cash-out-card");
const cashOutSection = document.getElementById("cashout");
const transferCard = document.getElementById("transfer-money");
const transferSection = document.getElementById("transfer");

addCard.addEventListener("click", function () {
  hideSection();
  addCardSection.style.display = "block";

  removeStyle();
  addCard.classList.add("shadow", "shadow-teal-700", "border-green-600");
});

cashOutCard.addEventListener("click", function () {
  hideSection();
  cashOutSection.style.display = "block";

  removeStyle();
  cashOutCard.classList.add("shadow", "shadow-teal-700", "border-green-600");
});

// --------------for Cashout Section-----------

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const cashOutAgent = parseInt(
    document.getElementById("cash-out-agent").value
  );
  console.log(cashOutAgent);

  const cashOutAmount = parseInt(
    document.getElementById("cash-out-amount").value
  );
  console.log(cashOutAmount);

  const CashOutGivenPinNumber = parseInt(
    document.getElementById("cash-out-pin").value
  );
  console.log(CashOutGivenPinNumber);

  const agentNo = 22233322211;

  if (CashOutGivenPinNumber !== pinNumber) {
    alert("Invalid Pin");
    return;
  } else if (cashOutAgent !== agentNo) {
    alert("Invalid Agent Number");
    return;
  }

  // things to be passed after condition validation
  const CashOutCurrentMoney = parseInt(
    document.getElementById("current-money").innerText
  );
  console.log(CashOutCurrentMoney);

  const CashOutUpdateCurrentMoney = CashOutCurrentMoney - cashOutAmount;
  document.getElementById("current-money").innerText =
    CashOutUpdateCurrentMoney;
});

/* ///////////// Modiule 27 \\\\\\\\\\\\\\ */

// ----------- Re-usable Fuctions Start---------------

// Get any input field value
function getInputValue(id) {
  const value = parseInt(document.getElementById(id).value);
  return value;
}
// update currentMoney
function updateCurrentMoney(updatedMoney) {
  document.getElementById("current-money").innerText = updatedMoney;
}
// remove style from all cards
function removeStyle() {
  const cards = document.getElementsByClassName("same-card");

  for (const card of cards) {
    card.classList.remove("shadow", "shadow-teal-700", "border-green-600");
  }
}
// Hide all section
function hideSection() {
  const sections = document.getElementsByClassName("same-section");

  for (const section of sections) {
    
    section.style.display = "none";
  }
}

// ----------- Re-usable Fuctions End---------------


// ------------Transfer Money-=-------

document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const userAccountNo = getInputValue("user-account-number");
  console.log(userAccountNo);

  const userAmount = getInputValue("user-amount");
  console.log(userAmount);

  const userPin = getInputValue("user-pin");
  console.log(userPin);

  const pin = 4444;
  const AccountNumber = 22233322211;
  console.log("user account no is " + AccountNumber);

  if (userAccountNo !== AccountNumber || userPin !== pin) {
    alert("Invalid Account Number or Pin");
    return;
  }

  //  things to do after validation

  const currentMoney =
    parseInt(document.getElementById("current-money").innerText) - userAmount;
  console.log(currentMoney);

  updateCurrentMoney(currentMoney);
});

// style and other for transfer card
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    removeStyle();
    document
      .getElementById("transfer-money")
      .classList.add("shadow", "shadow-teal-700", "border-green-600");

    hideSection();
    document.getElementById("transfer").style.display = "block";
  });


  // ---------------------Get Bonus---------------------
  