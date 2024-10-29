document.getElementById('envioSQL').onsubmit = async function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    const numero = document.getElementById('sql').value; // Obtén el valor del campo

    // Enviar la consulta para insertar el nuevo número
    await fetch(`/cgi-bin/funciones.cgi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ 'q': `INSERT INTO Personas (numero) VALUES ('${numero}');` })
    });

    // Cargar la tabla actualizada
    loadNumbers();
};

async function loadNumbers() {
    const response = await fetch(`/cgi-bin/funciones.cgi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ 'q': 'SELECT * FROM Personas;' })
    });

    const data = await response.text(); // Obtén la respuesta del servidor
    document.getElementById('resultado').innerHTML = decodeURI(data); // Muestra la respuesta en el div resultado
}

// Cargar los números al iniciar la página
document.addEventListener("DOMContentLoaded", loadNumbers);
