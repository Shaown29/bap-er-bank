function getInputValue(inDepo){
    const deposit=document.getElementById(inDepo);
    const inputDepositText=deposit.value;
    const inputDeposit=parseFloat(inputDepositText);
    deposit.value='';
    return inputDeposit;
}
function updateField(inputId,inpuDepo){
  const depositTotal=document.getElementById(inputId);
  const previousAmountText=depositTotal.innerText;
  const previousAmount=parseFloat(previousAmountText);
  const newAmountTotal=(previousAmount + inpuDepo);
  depositTotal.innerText=newAmountTotal;
}

function getNewBalance(){
  const balance=document.getElementById('balance-update');
  const balanceTotal=balance.innerText;
  const previousBalance=parseFloat(balanceTotal);
  return previousBalance;
}


function updateBalanceIt(inputDeposit,isAdd){
  const balance=document.getElementById('balance-update');
  // const balanceTotal=balance.innerText;
  // const previousBalance=parseFloat(balanceTotal);
  const previousBalance=getNewBalance();
  if(isAdd==true){
     balance.innerText=previousBalance+inputDeposit;
  }
  else{
   balance.innerText=previousBalance-inputDeposit;
  }
  
}





document.getElementById('deposit-btn').addEventListener('click',function(){
    // const deposit=document.getElementById('deposit-amount');
    // const inputDepositText=deposit.value;
    // const inputDeposit=parseFloat(inputDepositText);
    // console.log(inputDeposit);
   
    // update deposit total
    // const depositTotal=document.getElementById('deposit-update');
    // const previousAmountText=depositTotal.innerText;
    // const previousAmount=parseFloat(previousAmountText);
    // const newAmountTotal=(previousAmount + inputDeposit);
    // depositTotal.innerText=newAmountTotal;
   
  // update balance total
  // const balance=document.getElementById('balance-update');
  // const balanceTotal=balance.innerText;
  // const previousBalance=parseFloat(balanceTotal);
  // const updatedBalance=previousBalance+newAmountTotal;
  //  balance.innerText=updatedBalance;
  const inputDeposit=getInputValue('deposit-amount');
  if(inputDeposit>0){
    updateField('deposit-update',inputDeposit)
  updateBalanceIt(inputDeposit,true)
  }
  
 


})
 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //input part
    // const inputWithdraw=document.getElementById('withdraw-amount');
    // const inputWithdrawAmount=inputWithdraw.value;
    // const withdraw=parseFloat(inputWithdrawAmount);
    // console.log(withdraw);
    
    //text part

    // const previousWithdraw=document.getElementById('withdraw total');
    // const previousDollar=previousWithdraw.innerText;
    // const previousTotal=parseFloat(previousDollar);
    // const newTotal= (previousTotal+withdraw);
    // previousWithdraw.innerText=newTotal;
   
    //balance update
    // const balance=document.getElementById('balance-update');
    // const balanceTotal=balance.innerText;
    // const previousBalance=parseFloat(balanceTotal);
    // const updatedBalance=previousBalance-newTotal;
    // balance.innerText=updatedBalance;
    const withdraw =getInputValue('withdraw-amount')
    const currentBalance=getNewBalance();
    if(withdraw>0 && withdraw<currentBalance){
      updateField('withdraw total',withdraw)
      updateBalanceIt(withdraw,false)
    }
   



    


})