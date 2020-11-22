var plusBtn= document.querySelectorAll('.btn-plus');
for (let plus of plusBtn) {
    plus.addEventListener("click", function () {
        plus.nextElementSibling.innerHTML++;
        Totalachat()
    })
};
​
var minusBtn= document.querySelectorAll('.btn-moin');
for (let minus of minusBtn) {
    minus.addEventListener("click", function () {
        if (minus.previousElementSibling.innerHTML>0){
        minus.previousElementSibling.innerHTML--;
        Totalachat()
    }
    return minus.previousElementSibling.innerHTML
    })
};
​
​
    
    
function Totalachat() {
    let quantity = document.getElementsByClassName('.qtprod');
    let prices = document.getElementsByClassName('.prix');
    let total = document.getElementById('.prixtotal');
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += quantity[i].innerHTML * prices[i].innerHTML;
    }
    return total.innerHTML = sum.toFixed(2) + ' EUR';
​
}
​
let deletBtn= document.querySelectorAll('.supp');
for (let rmv of deletBtn) {
    rmv.addEventListener("click", function () {
        rmv.parentNode.parentNode.remove()
        Totalachat()
    }
​
​
        )}
​
let likeBtn= document.querySelectorAll('.btn-like');
for(let love of likeBtn){
    love.addEventListener('click', function(){
        if (love.style.background == "rgb(255, 119, 238)"){
            love.style.background = "rgb(255,0,0)";
        }else {
            love.style.background = "rgb(255, 119, 238)";
        }
​
    })
}