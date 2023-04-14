//for in (devuelve la posicion en la que estan los elementos)

let frutas = ["manzana","naranja","peras"]

for (fruta in frutas){
    document.write(fruta + "<br>")
}

for (fruta of frutas){
    document.write(fruta + "<br>")
}


//Para mostrarlo con un "in"
for (fruta in frutas){
    document.write(frutas[fruta] + "<br>")
}