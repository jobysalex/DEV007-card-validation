import validator from './validator.js';

const tarjetas = [
  { nombre: "American Express", numero: "3437" },
  { nombre: "Master Card", numero: "6011" },
  { nombre: "Diners Club", numero: "2131" },
  { nombre: "JCB", numero: "1800" },
];

const numTarjeta = document.getElementById("numeroTarjeta");
const botVerificar = document.getElementById("botonVerificar");
const mensaje = document.getElementById("mensaje");
const numeroEnmascarado = document.getElementById("numEnmascarado");

numTarjeta.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    verificarNumTarjeta();
  } else if (!escribirNum(e)) {
    e.preventDefault();
  }
  const enmascarar = validator.maskify(numTarjeta.value);
  numeroEnmascarado.textContent = enmascarar;
});

botVerificar.addEventListener('click', verificarNumTarjeta);
function verificarNumTarjeta() {
  if (numTarjeta.value.length < 16) {
    mensaje.innerHTML = "Su Numero de Tarjeta esta incompleto";
  }
  else {
    const tarjetaValida = validator.isValid(numTarjeta.value);
    console.log(tarjetaValida);
    const numero = numTarjeta.value.substr(0, 4);
    const tarjeta = tarjetas.find((t) => t.numero === numero);
    if (tarjetaValida && tarjeta) {
      mensaje.innerHTML = `Su Tarjeta es: ${tarjeta.nombre}`;
    } else {
      mensaje.innerHTML = "Su Tarjeta NO es Valida";
    }
  }
}

function escribirNum(num) {
  const key = num.charCode;
  return key >= 48 && key <= 57;
}

const revesNumTarjeta = document.getElementById("revesNumeroTarjeta");

numTarjeta.addEventListener("input", () => {
  const numeroTarjeta = numTarjeta.value;
  revesNumTarjeta.innerText = numeroTarjeta.split("").reverse().join("");
});
