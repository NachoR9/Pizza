import prompt from "prompt-sync"
import pizzas from "./modules/pizzas.js"
import makePizza from "./modules/makePizza.js"
import deliverPizza from "./modules/deliverPizza.js"

const pizza = prompt()('¿Qué pizza quieres?: ')
const option = pizzas.find(function(p){
    return p.nombre === pizza
}) 

makePizza(option)
deliverPizza()

