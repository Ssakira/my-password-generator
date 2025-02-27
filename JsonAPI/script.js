document.addEventListener("DOMContentLoaded", () => {
  fetchCartData();
});

async function fetchCartData() {
  try {
      const response = await fetch("https://dummyjson.com/carts");
      if (!response.ok) {
          throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      displayCartItems(data.carts);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

function displayCartItems(carts) {
  const container = document.getElementById("cart-container");
  container.innerHTML = "";
  carts.forEach(cart => {
      cart.products.forEach(product => {
          const item = createCartItem(product);
          container.appendChild(item);
      });
  });
}

function createCartItem(product) {
  const item = document.createElement("div");
  item.classList.add("cart-item");
  item.innerHTML = `<h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Quantity: ${product.quantity}</p>`;
  return item;
}
