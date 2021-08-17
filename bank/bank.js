document.getElementById('login-btn').addEventListener('click',function(){
   const emailField= document.getElementById('login-email');
   const email=emailField.value;
   //get password
   const passwordField=document.getElementById('login-password');
   const password=passwordField.value;
   if(email=='abcdef@bank.com' && password==12345 ){
       console.log('valid user');
       window.location.href='banking.html';
   }
   else{
       console.log('not valid');
   }
   

})