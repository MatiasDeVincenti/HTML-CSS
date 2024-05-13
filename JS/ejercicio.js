const array = ["Federico Villace", "hamburguesa", "papas"];

function procesarPedido(pedidos) {
  const cliente = "pepe";
  pedidos.push(cliente);
  return pedidos;
}

console.log(procesarPedido(array));
