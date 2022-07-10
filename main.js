// alert("Hola Mundo");
/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base)
 y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸
*/
// Crear el array de objetos "Pizzas". 🍕
let Pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["muzzarella", "oregano", "salsa de tomate", "aceitunas"],
    precio: 350,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "tomate en rodajas",
      " muzzarella",
      "albahaca",
      "aceite de oliva",
    ],
    precio: 450,
  },
  {
    id: 3,
    nombre: "Fugazzeta",
    ingredientes: ["muzzarella", "cebolla", "aceitunas"],
    precio: 500,
  },
  {
    id: 4,
    nombre: "Calabresa",
    ingredientes: ["muzzarella", "longaniza", "salsa de tomate"],
    precio: 550,
  },
  {
    id: 5,
    nombre: "Jamon_Y_Morron",
    ingredientes: ["muzzarella", "jamon", "morron", "salsa de tomate"],
    precio: 600,
  },
  {
    id: 6,
    nombre: "Anchoas",
    ingredientes: ["salsa de tomate", "Anchoas", "oregano", "aceitunas negras"],
    precio: 650,
  },
];

console.log(Pizzas);

// a) Las pizzas que tengan un id impar.
for (let i = 0; i < Pizzas.length; i++) {
  if (Pizzas[i].id % 2 != 0) {
    console.log(
      `El id ${Pizzas[i].id} de la pizza de ${Pizzas[i].nombre} es impar.`
    );
  }
}

// b) ¿Hay alguna pizza que valga menos de $600?
for (let i = 0; i < Pizzas.length; i++) {
  if (Pizzas[i].precio < 600) {
    console.log(
      `El valor de la pizza de ${Pizzas[i].nombre} es de $${Pizzas[i].precio}, su valor es menor de $600.`
    );
  }
}

// c) Los nombres de todos las pizzas.
Pizzas.forEach((pizza) => {
  console.log("Pizza de %s.", pizza.nombre);
});

//d) Los precios de las pizzas.
Pizzas.forEach((pizza) => {
  console.log("Precio de la Pizza id %s, valor: $ %d.", pizza.id, pizza.precio);
});

// e) El nombre de cada pizza con su respectivo precio.
Pizzas.forEach((pizza) => {
  console.log("La pizza de %s vale $ %d.", pizza.nombre, pizza.precio);
});

/*****   E3 JavaScript  ***** */
/*
Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

*/
