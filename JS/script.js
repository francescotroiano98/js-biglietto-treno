const kilometri = parseInt(prompt("scrivi quanti km farai"));
console.log(kilometri);
const age = parseInt(prompt("scrivi la tua età"));
console.log(age);
let ticketprice = 0.21 * kilometri;
console.log (ticketprice);


    if (age < 18) {
        ticketprice = ticketprice - ((kilometri*0.21*20)/100);
    } else if (age > 65) {
        ticketprice = ticketprice - ((kilometri*0.21*40)/100);
    } 




document.getElementById("answerPrice").innerHTML = ticketprice.toFixed(2);