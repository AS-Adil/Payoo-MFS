document.getElementById('add-bank-select').addEventListener('click', function(){
    document.getElementById('first-bank-option').style.display='none';
})


// -------------------------

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const selectedBank =document.getElementById('add-bank-select').value;
    console.log(selectedBank); 

    const givenBankAccountNo = parseInt(document.getElementById('bank-account-no').value);
    console.log(givenBankAccountNo);

    const addAmount = parseInt(document.getElementById('add-amount').value);
    console.log(addAmount);
    
    const givenPinNumber = parseInt(document.getElementById('add-pin').value);
    console.log(givenPinNumber);



  const pinNumber = 4444;
  const bankAccountNo = 22233322211;

  if(givenPinNumber!==pinNumber){
    alert('Invalid Pin');
    return;
  }else if( givenBankAccountNo !== bankAccountNo){
    alert('Invalid Account Number');
    return;
  }
    


    // things to be passed after condition validation
    const currentMoney = parseInt(document.getElementById('current-money').innerText);
    console.log(currentMoney);

    const updateCurrentMoney = currentMoney + addAmount;
    document.getElementById('current-money').innerText = updateCurrentMoney;

}) 