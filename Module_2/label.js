let persons = ["marco", "fini", "minue", "curso"];
let persons2 = ["septimo", "año", persons, "c"];

for (let person2 in persons2){
    if (person2 == "2"){
        for(let person of persons){
            document.write(person + "<br>");
        };
    }    
};