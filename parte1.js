let ingredientes = [
    {ingrediente: "levadura", cantidad: "30 gramos" }, 
    {ingrediente: "agua tibia", cantidad: "2 tazas y media" }, 
    {ingrediente: "aceite de oliva", cantidad: "2 cucharadas soperas" },
    {ingrediente: "harina de fuerza", cantidad: "400 gramos" },
    {ingrediente: "sal fina", cantidad: "1 cucharadita"},
    {ingrediente: "salsa de tomate", cantidad: "50 ml"},
    {ingrediente: "mozarella", cantidad: "200 gramos"},
    {ingrediente: "pepperoni", cantidad: "120 gramos"},
    {ingrediente: "aceitunas negras", cantidad: "4"}
]

function mezclar() {
    console.log(`mezclar ${ingredientes[0].cantidad} de ${ingredientes[0].ingrediente} con ${ingredientes[1].cantidad} de ${ingredientes[1].ingrediente}`)
    console.log(`añadir ${ingredientes[2].cantidad} de ${ingredientes[2].ingrediente}`);
    console.log(`añadir ${ingredientes[3].ingrediente}`);
    console.log(`añadir ${ingredientes[4].cantidad} de ${ingredientes[4].ingrediente}`)
}

function amasar() {
    console.log("amasar bien hasta que deje de ser pegajosa");
    console.log("darle forma a la masa para 4 pizzas");
    console.log("4 porciones obtenidas");
    console.log("dejar la base para 1 pizza reposar durante 45 min");
    console.log("base cuadrada obtenida");
}

function ponerIngredientes() {
console.log(`añadido ${ingredientes[5].cantidad} de ${ingredientes[5].ingrediente}`);
console.log(`añadida ${ingredientes[6].cantidad} de ${ingredientes[6].ingrediente}`);
console.log(`añadido ${ingredientes[7].cantidad} de ${ingredientes[7].ingrediente}`);
console.log(`añadidas ${ingredientes[8].cantidad} ${ingredientes[8].ingrediente}`);
}

function hornear() {
    console.log(`horneando la pizza durante 10 minutos`);
}

mezclar()
amasar()
ponerIngredientes()
hornear()

console.log(`pizza lista`);
console.log(`pizza entregada`);



