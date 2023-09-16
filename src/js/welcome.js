function mostrarVentanaEmergente() {
    // Recopila la información que deseas mostrar en la ventana emergente
    const titulo = "Bienvenido a vDolarjs";
    const contenido = "La página web está diseñada para ayudar al usuario a calcular cuántos datos móviles de su celular equivalen a una cantidad específica de dinero. El usuario puede ingresar una cantidad en bolívares y la página calcula la cantidad equivalente de megabytes, lo que permite a los usuarios comprender mejor cuántos datos móviles pueden comprar con su saldo.";
    const botonCerrar = "Cerrar";

    // Crea un elemento div para la ventana emergente
    const ventanaEmergente = document.createElement("div");
    ventanaEmergente.classList.add("ventana-emergente");

    // Crea el contenido de la ventana emergente
    ventanaEmergente.innerHTML = `
        <div class="ventana-emergente-contenido">
            <h2>${titulo}</h2>
            <p>${contenido}</p>
            <button onclick="cerrarVentanaEmergente()">${botonCerrar}</button>
        </div>
    `;

    // Agrega la ventana emergente al cuerpo del documento
    document.body.appendChild(ventanaEmergente);
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    const ventanaEmergente = document.querySelector(".ventana-emergente");
    if (ventanaEmergente) {
        ventanaEmergente.remove();
    }
}

// Muestra la ventana emergente cuando se carga el DOM
document.addEventListener("DOMContentLoaded", mostrarVentanaEmergente);