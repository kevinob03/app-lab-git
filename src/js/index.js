const formulario = document.querySelector(".form-tarea");
const input = document.querySelector("input");
const lista = document.querySelector("ul");

console.log(formulario);
console.log(input);
console.log(lista);

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const tarea = input.value;
  const nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = tarea;

    lista.appendChild(nuevaTarea);
});