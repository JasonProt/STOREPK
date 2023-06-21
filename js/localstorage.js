document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('/register', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Скрываем форму и показываем сообщение об успехе
      document.getElementById('myForm').style.display = 'none';
      document.getElementById('success-message').classList.remove('hidden');
    } else {
      // Скрываем форму и показываем сообщение об ошибке
      document.getElementById('myForm').style.display = 'none';
      document.getElementById('error-message').classList.remove('hidden');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
    // Скрываем форму и показываем сообщение об ошибке
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('error-message').classList.remove('hidden');
  });
});
