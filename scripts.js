//Recogemos los elementos del DOM
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//Creamos una variable para ir guardando el paso en el que estamos
let currentActive = 1;

//Creamos un evento para el botón de siguiente
next.addEventListener('click', () => {
    //Incrementamos el paso en el que estamos
    currentActive++;
    //Si el paso es mayor que el número de círculos, lo dejamos en el último
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    //Llamamos a la función que actualiza el DOM
    update();
});

//Creamos un evento para el botón de anterior
prev.addEventListener('click', () => {
    //Decrementamos el paso en el que estamos
    currentActive--;
    //Si el paso es menor que 1, lo dejamos en el primero
    if (currentActive < 1) {
        currentActive = 1;
    }
    //Llamamos a la función que actualiza el DOM
    update();
});

//Creamos una función que actualiza el DOM
function update() {
    //Recorremos todos los círculos
    circles.forEach((circle, index) => {
        //Si el índice es menor que el paso en el que estamos, le añadimos la clase active
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            //Si no, se la quitamos
            circle.classList.remove('active');
        }
    });

    //Recogemos todos los círculos activos
    const actives = document.querySelectorAll('.active');

    //Actualizamos el ancho de la barra de progreso
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    //Si el paso en el que estamos es el primero, deshabilitamos el botón de anterior
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        //Si el paso en el que estamos es el último, deshabilitamos el botón de siguiente
        next.disabled = true;
    } else {
        //Si no, habilitamos ambos botones
        prev.disabled = false;
        next.disabled = false;
    }
}