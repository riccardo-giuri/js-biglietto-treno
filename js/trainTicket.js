const kilometers = prompt("Quanti chilometri devi percorrere?");
const age = prompt("Quanti anni hai?");
const kmPrice = 0.21;
const ridePrice = (kilometers * kmPrice);
let underAgeCouponPrecentage = 20;
let overAgeCouponPrecentage = 40;
let couponValue = 0;
let finalPrice = 0;


switch (true){
    case age < 18:
        couponValue = (ridePrice / 100) * underAgeCouponPrecentage;
        finalPrice = (ridePrice - couponValue).toFixed(2);
        document.getElementById("ticket_cost").innerHTML = `Il costo della sua tratta ferroviaria è di ${finalPrice}€`;
        break;

    case age > 65:
        couponValue = (ridePrice / 100) * overAgeCouponPrecentage;
        finalPrice = (ridePrice - couponValue).toFixed(2);
        document.getElementById("ticket_cost").innerHTML = `Il costo della sua tratta ferroviaria è di ${finalPrice}€`;
        break;

    default:
        finalPrice = ridePrice.toFixed(2);
        document.getElementById("ticket_cost").innerHTML = `Il costo della sua tratta ferroviaria è di ${finalPrice}€`;
}