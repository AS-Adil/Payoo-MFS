document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const mobleNumber = 333444555;
  const pinNumber = 4444;

  const phoneNumberValue = document.getElementById("phone").value;
  const phoneNumberValueConverted = parseInt(phoneNumberValue);

  const pinNumberValue = document.getElementById("pin").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  console.log(pinNumberValueConverted, phoneNumberValueConverted);

  if (
    mobleNumber === phoneNumberValueConverted &&
    pinNumber === pinNumberValueConverted
  ) {
    window.location.href = "./home.html";
  } else {
    console.log("Invalid");
  }
});



