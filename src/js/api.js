document.addEventListener('DOMContentLoaded', function () {
  
    fetch('https://apivdolar.vercel.app/dolarbcv')
      .then(response => response.json())
      .then(data => {
        const price = data[0].priceBCV;
        const info = data[0].lastUpdated;
        priceText.textContent = price;
        updateInfo.textContent = info;
      })
      .catch(error => {
        console.error('Error al consultar la API:', error);
      });

  });