"user strict";

// DECLARACION
const numberOpacity = document.querySelector(".number-opacity");
const numberUnOpacity = document.querySelector(".number-unopacity");
const cuerpoCalculadora = document.querySelector(".main");

const btn0 = document.getElementById("cero");
const btn1 = document.getElementById("uno");
const btn2 = document.getElementById("dos");
const btn3 = document.getElementById("tres");
const btn4 = document.getElementById("cuatro");
const btn5 = document.getElementById("cinco");
const btn6 = document.getElementById("seis");
const btn7 = document.getElementById("siete");
const btn8 = document.getElementById("ocho");
const btn9 = document.getElementById("nueve");

const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDividir = document.getElementById("dividir");
const btnPorcentaje = document.getElementById("porcentaje");
const btnIgual = document.getElementById("igual");

const btnPunto = document.getElementById("punto");
const btnMasMenos = document.getElementById("masmenos");
const btnBorrarUno = document.getElementById("borrar-uno");
const btnBorrarTodo = document.getElementById("borrar-todo");

const darkWhite = document.querySelector(".dark-white");

// UTILIDADES

let reset = 0;

//MOSTAR EN PANTALLA AL ELEMENTO CLICKEADO
const clickMostrarNumero = (element) => {
  element.addEventListener("click", () => {
    if (reset === 1) numberOpacity.textContent = "";
    numberOpacity.textContent += element.textContent;

    reset = 0;
  });
};

clickMostrarNumero(btn0);
clickMostrarNumero(btn1);
clickMostrarNumero(btn2);
clickMostrarNumero(btn3);
clickMostrarNumero(btn4);
clickMostrarNumero(btn5);
clickMostrarNumero(btn6);
clickMostrarNumero(btn7);
clickMostrarNumero(btn8);
clickMostrarNumero(btn9);

const clickMostrarSigno = (element) => {
  element.addEventListener("click", () => {
    let elementText = numberOpacity.textContent;

    if (reset === 1) elementText = "";

    if (elementText.length === 0) {
        alert("No puedes empezar con un signo de operacion");
        return
    }
    
    if (/([\+\-\*\.\/][\+\-\*\.\/]){1}/g.test(elementText)) {
      numberOpacity.textContent = "";
      alert("no puedes poner operadores seguidos");
    } else numberOpacity.textContent += element.textContent;



    reset = 0;
  });
};

clickMostrarSigno(btnSumar);
clickMostrarSigno(btnRestar);
clickMostrarSigno(btnMultiplicar);
clickMostrarSigno(btnDividir);
clickMostrarSigno(btnPorcentaje);
clickMostrarSigno(btnPunto);

// BOTON + / -
btnMasMenos.addEventListener("click", () => {
  let valor = numberUnOpacity.textContent;

  if (valor.length >= 1) numberUnOpacity.textContent -= valor * 2;
});

// BORRAR EN LA PANTALLA
btnBorrarUno.addEventListener("click", () => {
  reset = 0;

  let conArray = numberOpacity.textContent.split("");
  conArray.pop();
  numberOpacity.textContent = conArray.join("");
});

btnBorrarTodo.addEventListener("click", () => {
  numberOpacity.textContent = "";
  numberUnOpacity.textContent = "";
});

// BOTON IGUAL (OPERACIONES)
btnIgual.addEventListener("click", () => {
  numberUnOpacity.textContent = eval(numberOpacity.textContent);
  reset = 1;
});

// CAMBIAR MODO BLACK/WHITE
darkWhite.addEventListener("click", () => {
  const rootStyles = document.documentElement.style;

  darkWhite.classList.toggle("unwhite");
  darkWhite.classList.toggle("unblack");

  if (darkWhite.classList.contains("unblack")) {
    rootStyles.setProperty("--background-black", "#f1f2f3");
    rootStyles.setProperty("--white", "#000");
    rootStyles.setProperty("--gris-black", "#fff");
    rootStyles.setProperty("--gris", "#d2d3da");

    btnBorrarUno.children[0].style.filter = "invert(0)";
  } else {
    rootStyles.setProperty("--background-black", "#17171c");
    rootStyles.setProperty("--white", "#fff");
    rootStyles.setProperty("--gris-black", "#2e2f38");
    rootStyles.setProperty("--gris", "#4e505f");

    btnBorrarUno.children[0].style.filter = "invert(1)";
  }
});
