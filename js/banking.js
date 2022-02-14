// handle deposit button events
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get balance 
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
   
    const previousDepositAmount = depositTotal.innerText;

    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit value 
    depositInput.value = '';
    


});
// handle widthraw balance event handlar
document.getElementById('widthraw-button').addEventListener('click', function(){
    const widthrawInput = document.getElementById('widthraw-amount');
    const widthrawAmountText = widthrawInput.value;
    const newWidthrawAmount = parseFloat(widthrawAmountText);

    // set widthraw total
    const widthrawTotal = document.getElementById('widthraw-total');
    const perviousWidthrawText = widthrawTotal.innerText;
    const perviousWidthrawTotal = parseFloat(perviousWidthrawText);

    const newWidthrawTotal = perviousWidthrawTotal + newWidthrawAmount;
    widthrawTotal.innerText = newWidthrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWidthrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    widthrawInput.value = '';
})

















