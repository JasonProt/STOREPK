function changeBackgroundGradient() {
    var colors = [];
  
    // Генерируем случайные RGB значения для каждого цвета
    for (var i = 0; i < 2; i++) {
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);
      colors.push(`rgb(${red}, ${green}, ${blue})`);
    }
  
    // Создаем градиент с использованием случайных цветов
    var gradient = `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`;

    // Устанавливаем сгенерированный градиент фона
  var background = document.getElementById('background');
  background.style.backgroundColor = colors[0];
  setTimeout(function() {
    background.style.backgroundColor = colors[1];
  }, 1);

  // Задаем плавный переход изменения фона
  background.style.transition = 'background-color 1s ease-in-out';
  
    // Устанавливаем сгенерированный градиент фона
    document.getElementById('background').style.background = gradient;
  }
  // Запускаем функцию изменения градиента каждые 10 секунд
  setInterval(changeBackgroundGradient, 5000);