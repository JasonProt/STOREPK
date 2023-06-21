var cart = [];
function addToCart(itemName, price) {
  var item = {
    name: itemName,
    price: price
  };
  cart.push(item);
  var cartItems = document.getElementById("cartItems");
  var li = document.createElement("li");
  li.textContent = itemName + " - " + price + "р";
  cartItems.appendChild(li);
}
function checkout() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  alert("Общая сумма заказа: " + total + "р");
  cart = [];
  document.getElementById("cartItems").innerHTML = ""; 
}
