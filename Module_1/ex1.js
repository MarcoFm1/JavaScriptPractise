let robert = prompt("Ingresa el monto que tiene Robert: ");
let peter = prompt("Ingresa el monto que tiene Peter: ");
let cofla = prompt("Ingresa el monto que tiene Cofla: ");

let platacofla = parseInt(cofla);

if(robert >= 0.6 && robert < 1){
    alert(`Robert se compra el helado de agua`)
}

else if(robert >= 1 && robert < 1.6){
    alert(`Robert se compra el helado de crema`)
}

else if(robert >= 1.6 && robert < 1.7){
    alert(`Robert se compra el helado heladox`)
}

else if(robert >= 1.7 && robert < 1.8){
    alert(`Robert se compra el helado heladovich`)
}

else if(robert >= 1.8 && robert < 2.9){
    alert(`Robert se compra el helado con cofites o 1/4 de kilo`)
}

if(peter >= 0.6 && peter < 1){
    alert(`peter se compra el helado de agua`)
}

else if(peter >= 1 && peter < 1.6){
    alert(`peter se compra el helado de crema`)
}

else if(peter >= 1.6 && peter < 1.7){
    alert(`peter se compra el helado heladox`)
}

else if(peter >= 1.7 && peter < 1.8){
    alert(`peter se compra el helado heladovich`)
}

else if(peter >= 1.8 && peter < 2.9){
    alert(`peter se compra el helado con cofites o 1/4 de kilo`)
}

if(platacofla >= 0.6 && platacofla < 1){
    alert(`cofla se compra el helado de agua y su vuelto es ${platacofla - 0.6} pesos`)   
}

else if(platacofla >= 1 && platacofla < 1.6){
    alert(`cofla se compra el helado de crema y su vuelto es ${platacofla - 0.1} pesos`)
}

else if(platacofla >= 1.6 && platacofla < 1.7){
    alert(`cofla se compra el helado heladox y su vuelto es ${cofla - 1.6} pesos`)
}

else if(platacofla >= 1.7 && platacofla < 1.8){
    alert(`cofla se compra el helado heladovich y su vuelto es ${platacofla - 1.7} pesos`)
}

else if(platacofla >= 1.8 && platacofla > 2.9 < 3){
    alert(`cofla se compra el helado con cofites o 1/4 de kilo y su vuelto es ${platacofla - 1.8} pesos`)
}
