const productsList = document.querySelector("#product-list");
const cartTable = document.querySelector("#cart-table");
const cartBody = document.querySelector("#cart-body");
const subtotal = document.querySelector("#subtotal");
const grandTotal = document.querySelector("#grand-total");
const clearCart = document.querySelector("#clear-cart");
const cartTotal = document.querySelector("#cart-total");
const cartIcon = document.getElementById("cart-icon");
const cartAside = document.querySelector("#cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const removeItem = document.querySelector("#remove");

let cart = [];
let products;

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    products.forEach((product) => {
      let productHTML = `
        <li class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.title}</h3>
          <p>Price: ${product.price}</p>
          <button class="add-to-cart" data-id=${product.id}>Add to Cart</button>
        </li>
      `;
      productsList.innerHTML += productHTML;
    });
  })
  .catch((error) => {
    console.error(error);
  });

function addToCart(event) {
  let button = event.target;
  let id = button.dataset.id;
  let product = products.find((product) => product.id == id);
  let cartProduct = cart.find((product) => product.id == id);
  if (cartProduct) {
    cartProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

const countCart = (cart) => {
  let count = 0;
  cart.forEach((product) => {
    count += product.quantity;
  });
  return count;
};

renderCart();
function renderCart() {
  let cartHTML = "";
  let total = 0;
  cart.forEach((product) => {
    let productTotal = product.price * product.quantity;
    total += productTotal;
    total = parseFloat(total.toFixed(2));
    cartHTML += `
      <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${productTotal}</td>
        <td>
          <i class="fa-solid fa-trash-can remove" data-id=${product.id}></i>
        </td>
      </tr>
    `;
  });

  const cartHeadHTML = `
      <tr class="cart-head">
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Total</td>
        <td></td>
      </tr>
    `;
  cartBody.innerHTML = cartHeadHTML + cartHTML;
  subtotal.textContent = `$${total}`;
  grandTotal.textContent = `$${total}`;
  const cartCount = countCart(cart);
  cartTotal.textContent = `(${cartCount})`;
}

function removeFromCart(event) {
  let button = event.target;
  let id = button.dataset.id;
  cart = cart.filter((product) => product.id != id);
  renderCart();
}

function clearAllFromCart() {
  cart = [];
  renderCart();
}

productsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    addToCart(event);
  }
});

document.querySelector("#cart-body").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove")) {
    const itemToRemove = event.target.closest("tr");
    itemToRemove.remove();
    let button = event.target;
    let id = button.dataset.id;
    cart = cart.filter((product) => product.id != id);
    renderCart();
  }
});

clearCart.addEventListener("click", clearAllFromCart);

cartIcon.addEventListener("click", function () {
  cartAside.classList.toggle("show");
});
