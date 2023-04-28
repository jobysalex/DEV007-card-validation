# Tarjeta de crédito válida

Este proyecto muestra como ingresas el numero de una tarjeta bancaria en un <input>, logrando enmascarar el numero; osea haciendo que el numero siendo de 16 cifras, solo se vean sus ultimas cuatro, luego reversa el numero; mas abajo se crea un boton de verificacion que internamente coge el numero, lo reversa, le aplica una operacion a los digitos del numero que se encuentran en posiciones pares, a los que se encuentran en posiciones impares los conserva igual; ahora, si los digitos al hacerles la operacion que es duplicarlos, dan como resultado un numero mayor a 9, debemos hacer que se separen, para asi sumar sus digitos y asi si, almacenarlos en su posicion.
Luego se suma todos los digitos, osea, los de posiciones impares y los nuevos digitos de las pocisiones pares, dando como resultado un numero que debe ser multiplo de diez; y asi todo el numero ingresado se da por validado.
En caso de no cumplir con esas especificaciones anteriores, entonces se dara como: “Numero de Tarjeta Invalido”.

Para la funcion maskify: se recibe el numero de tarjeta ingresado en el <input> que ya esta validado y se le ocultan, por medio de signos hash (#), los primeros 12 digitos, mostrando solo los ultimos cuatro ingresados.

Esta pagina muestra una pantalla simulando fuese de un cajero electronico, llamado: “Cajero Cash” por medio de un <h1>.
Luego tiene un <label> que dice: “Digite su Numero de Tarjeta”.
Enseguida esta un <input> que recibe solo digitos del 0 al 9, sin espacios, y que tampoco recibe otros caracteres como letras o signos.
Despues se muestran otros dos <label> los cuales en su frente muestran el Numero de Tarjeta Enmascarado y el Numero de la Tarjeta al Reves.
Debajo de estos <label> esta el boton verificar que acciona los mensajes que muestran si:
“Su Numero de Tarjeta esta Incompleto”   o
“Su Tarjeta es Valida”  
Mostrando en su frente si es del Banco:
“American Express”
“Master Card”
“Diners Club”
“JBC”

o tambien puede mostrar que: 
“Su Tarjeta NO es Valida”

En la parte de abajo como ayuda visual se muestra una tabla con una codificacion inicial, la cual si el numero de tarjeta ingresado en el <input> tiene en sus cuatro primeras cifras uno de estos numeros, permitira identificar a cual de estos cuatro bancos pertenece.

Para este proyecto pense en que fuese como un cajero electronico; y asi, para poderlo completar, empece dando lectura al algoritmo de Lunn y viendo unos videos del mismo, despues empece a leer los objetivos de aprendizaje; y por ahi, a mitad de estas lecturas pense en como se podia ver y asi fui ya, implementandolo en HTML, un minimo de CSS y la funcionalidad en JavaScript.
Segui leyendo y viendo videos con respecto al tema y es asi que con la ayuda de los coaches  y de mis compañeras logre terminarlo.

Los principales usuarios del producto son las personas que necesitan una pagina de un cajero electronico.
Los objetivos de los usuarios son:
    • Poder ingresar un numero de tarjeta.
    • Que el cajero verifique si el numero de la tarjeta ingresado es valido o invalido segun el caso.
