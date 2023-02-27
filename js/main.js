'use strict';
// 1. Elementos que necesito del HTML
const btn = document.querySelector(".js_btn");
const select = document.querySelector(".js_select");
const smily = document.querySelector(".js_smily");
const mainElement = document.querySelector(".js_main");

// 2. Declaro funciones
function updateSmily() {
    //cojo el value del select
    const valueSelect = select.value;

    //modifico el div de la carita con el valor que he cogido del selct
    smily.innerHTML = valueSelect;
}

function generateRandomNumbers(max) {
    const numAleatForm = parseInt(Math.random() * max);
    return numAleatForm;
}

function changeBackground() {
    //genero numero aleatorio
    const numAleat = generateRandomNumbers(100);
    //Hago la condición
    if (numAleat % 2 === 0) {
        //Es par
        mainElement.classList.remove('naranjaFuegoChileno');
        mainElement.classList.add('amarilloCorrecto');
    } else {
        //es impar
        mainElement.classList.remove('amarilloCorrecto');
        mainElement.classList.add('naranjaFuegoChileno');
    }
}

function handleClickBtn(event) {
    event.preventDefault();
    updateSmily();
    changeBackground();
}

//Función manejadora del evento
btn.addEventListener('click', handleClickBtn)

