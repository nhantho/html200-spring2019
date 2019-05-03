let balance = 2000;
let Q = false;

while(Q === false) {
  let input = prompt('Welcome to US Bank. What can we help you with today? \nPlease enter\: \nQ to quit\nW to withdraw\nD to deposit\nB to view balance');
  switch (input.toUpperCase()) {
    case 'B':{
      alert('Your balance is $' + balance.toFixed(2));
      break;
    }
    case 'W':{
      let withdrawlInput = prompt('How much would you like to withdraw?');
      result = Number(balance) - Number(withdrawlInput);
      alert('Your new balance is $' + result.toFixed(2));
      break;
    }
    case 'D':{
      let depositInput = prompt('How much would you like to deposit?');
      result = Number(balance) + Number(depositInput);
      alert('Your new balance is $' + result.toFixed(2));
      break;
    }
    case 'Q':{
      alert('You have been successfully logged out');
      Q = true;
      break;
    }
  }
}
