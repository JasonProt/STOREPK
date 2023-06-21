function calculateSum() {
    var select1 = document.getElementById("cpu");
    var select2 = document.getElementById("gpu");
    var select3 = document.getElementById("ram");
    var select4 = document.getElementById("storage");
    var resultElement = document.getElementById("total-cost");

    var value1 = parseInt(select1.value);
    var value2 = parseInt(select2.value);
    var value3 = parseInt(select3.value);
    var value4 = parseInt(select4.value);

    var sum = value1 + value2 + value3 + value4;

    resultElement.textContent = sum;
  }
