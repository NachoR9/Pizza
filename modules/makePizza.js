export default function makePizza(pizza) {
    console.log(`pizza ${pizza.nombre} en preparación`);
    amasar()
    incluirIngredientes(pizza)
    hornear()
}

function amasar() {
    console.log(`cogiendo la masa`);
    console.log(`estirando la masa`);    
}

function incluirIngredientes(pizza) {
    pizza.ingredientes.forEach(element => {
        console.log(`Añadiendo ${element}`);
    })
}

function hornear() {
    console.log(`Horneando la pizza`);
}