let levadura = "30 gramos de levadura";
let aguaTibia = "2.5 tazas";
let aceiteDeOliva = 2;
let harinaDeFuerza = 1;
let salFina = 1;

function mezclar (levadura, aguaTibia, aceiteDeOliva, harinaDeFuerza, salFina) {
    return masa
}
/* Función hacer la masa y función agregar indgredientes. Identificar y separar responsabilidades.
Un solo archivo, multiples funciones que se llaman en varias funciones. Hacer la pizza y entregar la pizza.
Esas funciones llaman a otras funciones. Array de los ingredientes solo tiene que llevar los ingredientes.
Reutilizar las funciones. 2 arrays ingredientes para la masa e ingredientes para la pizza. Variable numerica 
que pueda ser seteada segun necesidad
*/

let ingredientes = [["levadura", 30], ["aguaTibia",2.5], ["aceiteDeOliva",2], ["harinaDeFuerza",1], ["salFina", 1]]

console.log("voy a mezclar" + " " + ingredientes[0][1] + " " + "gramos de" + " " + [0][0] + ",")
console.log("voy a mezclar" + " " + ingredientes[1][1] + " " + "tazas de" + " " + [1][0] + ",")
console.log("voy a mezclar" + " " + ingredientes[2][1] + " " + "cucharadas soperas de" + " " + [2][0] + ",")
console.log("voy a mezclar" + " " + ingredientes[3][1] + " " + "kilogramo de" + " " + [3][0] + ",")   
console.log("voy a mezclar" + " " + ingredientes[4][1] + " " + "cucharadita de" + " " + [4][0] + ".")
