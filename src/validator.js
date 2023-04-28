const validator = {
  isValid: function (numeroTarjeta) {
    console.log(numeroTarjeta);
    const revesNumTarjeta = numeroTarjeta.split("").reverse();
    let suma = 0;
    for (let i = 0; i < revesNumTarjeta.length; i++) {
      if (i % 2 !== 0) {
        let multiplicacionPar = parseInt(revesNumTarjeta[i] * 2);
        if (multiplicacionPar > 9) {
          multiplicacionPar -= 9;
        }
        suma += multiplicacionPar;
      } else {
        suma += parseInt(revesNumTarjeta[i]);
      }
    }
    if (suma % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },

  maskify: function (numeroTarjeta) {
    console.log(numeroTarjeta);
    if (numeroTarjeta.length <= 4) {
      return numeroTarjeta;
    }
    else if (numeroTarjeta.length > 4) {
      const numeroGatos = numeroTarjeta.length - 4;
      const numeroTarjetaVisible = numeroTarjeta.substring(numeroGatos);
      let numeroTarjetaInvisible = "";
      for (let i = 0; i < numeroGatos; i++) {
        numeroTarjetaInvisible += "#";
      }
      const numeroTarjetaFinal = numeroTarjetaInvisible + numeroTarjetaVisible;
      console.log(numeroTarjetaFinal);
      return numeroTarjetaFinal;
    }
  }
}
export default validator;
