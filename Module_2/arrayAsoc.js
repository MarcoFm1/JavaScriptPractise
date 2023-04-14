let pc = {
    numero: "1",
    procesador: "Ryzen 5 1600",
    ram: "16GB",
};

let proce = document.write(pc["procesador"]);
let num = pc["numero"];
let ram = document.write(pc["ram"]);

let frase = `<br> Tengo ${num} pc, tiene un procesador ${proce} y ${ram} de memoria RAM`;

document.write(frase);

