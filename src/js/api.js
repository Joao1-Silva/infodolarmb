document.addEventListener('DOMContentLoaded', function () {
  
    fetch('https://apivdolar.vercel.app/dolarbcv')
      .then(response => response.json())
      .then(data => {
        const price = data[0].priceBCV;
        const info = data[0].lastUpdated;
        priceText.textContent = price;
        updateInfo.textContent = info;
        // console.log(data);
      })
      .catch(error => {
        console.error('Error al consultar la API:', error);
      });
  
    // function convertirMegas() {
    //   // Obtener el valor ingresado por el usuario
    //   const bs = parseInt(document.getElementById('bolivaresInput').value);
  
    //   if (!isNaN(bs)) {
    //     // Calcular la cantidad de dólares
    //     const dollars = bs / priceText.textContent;
  
    //     // Calcular la cantidad de megas
    //     const mb = dollars / costoPorMega;
  
    //     // Mostrar el resultado
    //     document.getElementById('resultado').textContent = `${mb.toFixed(2)} megas`;
    //   } else {
    //     // Si el valor no es válido, mostrar un mensaje de error
    //     document.getElementById('resultado').textContent = 'Ingresa un valor válido';
    //   }
    // }
  
    // Llamar a la función inicialmente
    convertirMegas();
  });