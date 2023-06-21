function submitForm(event) {
    event.preventDefault();

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var message = document.querySelector(".message").value;

    console.log("Имя: " + name);
    console.log("Email: " + email);
    console.log("Сообщение: " + message);
    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".message").value = "";

    alert("Сообщение успешно отправлено!");
  }