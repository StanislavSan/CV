// 1. Получаем элементы
const button = document.querySelector('button#myButton');
const gif = document.getElementById('gif-image');

// 2. Проверяем, что элементы найдены
if (!button || !gif) {
  console.error('Не найдены элементы: кнопка или GIF-изображение');
  return;
}

// 3. Обработчик клика
button.addEventListener('click', function() {
  // Устанавливаем URL GIF
  gif.src = 'https://media.tenor.com/images/6993997855374677613/typing-cat.gif';
  
  // Показываем GIF
  gif.style.display = 'block';
});