let x = 20;

for (let i = 0; i < x; i++){
    document.write(i + "<br>" );
};

//Si queres que el numero termine en uno especifico...

for (let i = 0; i < x; i++){
    if (i == 12){
        break
    }
    document.write(i + "<br>");
};


//Si queres que el bucle saltee un numero en especifico...

for (let i = 0; i < x; i++){
    if (i == 12){
        continue;
    }
    document.write(i + "<br>");
}; 

