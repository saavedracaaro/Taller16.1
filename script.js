
const apiUrl = 'https://api.thedogapi.com/v1/images/search';

// Referencia a los elementos del DOM
const dogImageContainer = document.getElementById('dog-image-container');
const dogImage = document.getElementById('dog-image');
const getDogBtn = document.getElementById('get-dog-btn');

// Función para obtener una imagen de perro aleatoria
async function getDogImage() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-api-key': 'YOUR_API_KEY', // Sustituye esto por tu API key
      },
    });
    const data = await response.json();
    // Coloca la imagen en el HTML
    dogImage.src = data[0].url;
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
  }
}

// Evento de clic en el botón
getDogBtn.addEventListener('click', getDogImage);

// Cargar una imagen aleatoria al iniciar la página
getDogImage();