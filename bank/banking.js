function getInputValue(){
    const deposit=document.getElementById('deposit-amount');
    const inputDepositText=deposit.value;
    const inputDeposit=parseFloat(inputDepositText);
    deposit.value='';
    return inputDeposit;
}





document.getElementById('deposit-btn').addEventListener('click',function(){
    // const deposit=document.getElementById('deposit-amount');
    // const inputDepositText=deposit.value;
    // const inputDeposit=parseFloat(inputDepositText);
    // console.log(inputDeposit);
    const inputDeposit=getInputValue();
    // update deposit total
    const depositTotal=document.getElementById('deposit-update');
    const previousAmountText=depositTotal.innerText;
    const previousAmount=parseFloat(previousAmountText);
    const newAmountTotal=(previousAmount + inputDeposit);
    depositTotal.innerText=newAmountTotal;
  // update balance total
  const balance=document.getElementById('balance-update');
  const balanceTotal=balance.innerText;
  const previousBalance=parseFloat(balanceTotal);
  const updatedBalance=previousBalance+newAmountTotal;
   balance.innerText=updatedBalance;
 


})
 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //input part
    const inputWithdraw=document.getElementById('withdraw-amount');
    const inputWithdrawAmount=inputWithdraw.value;
    const withdraw=parseFloat(inputWithdrawAmount);
    console.log(withdraw);
    //text part

    const previousWithdraw=document.getElementById('withdraw total');
    const previousDollar=previousWithdraw.innerText;
    const previousTotal=parseFloat(previousDollar);
    const newTotal= (previousTotal+withdraw);
    previousWithdraw.innerText=newTotal;
    //balance update
    const balance=document.getElementById('balance-update');
    const balanceTotal=balance.innerText;
    const previousBalance=parseFloat(balanceTotal);
    const updatedBalance=previousBalance-newTotal;
    balance.innerText=updatedBalance;



    inputWithdraw.value=''


})