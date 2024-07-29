let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  //digerleri kapatilsin
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  clock.classList.remove("active");
  currentTime.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#car-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  //digerleri kapatilsin
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  clock.classList.remove("active");
  currentTime.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  //digerleri kapatilsin
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  clock.classList.remove("active");
  currentTime.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  //digerleri kapatilsin
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  clock.classList.remove("active");
  currentTime.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  currentTime.classList.remove("active");
};
/////////////////////
//anlik saat icin
function updateTime() {
  var currentTimeElement = document.getElementById("currentTime");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Gerekirse bastaki sifiri eklerim
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var formattedTime = hours + ":" + minutes + ":" + seconds;
  currentTimeElement.textContent = formattedTime;
}
// Guncelleme zamani her saniye
setInterval(updateTime, 1000);

// Saati hemen goruntulemek icin ilk çagrı
updateTime();

//clock-btn bastigimda anlik saat acktiv olsun
let clock = document.querySelector(".clock");

document.querySelector("#clock-btn").onclick = () => {
  clock.classList.toggle("active");
  //digerleri kapatilsin
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};
/////////////////

function toggleDarkMode() {
  // body elementini seç
  var bodyElement = document.body;

  // body elementinin classList'inde "dark-mode" class'ı var mı kontrol et
  var isDarkMode = bodyElement.classList.contains("dark-mode");

  // Eğer dark mode ise light mode'a, light mode ise dark mode'a geçiş yap
  if (isDarkMode) {
    bodyElement.classList.remove("dark-mode");
    bodyElement.classList.add("light-mode");
  } else {
    bodyElement.classList.remove("light-mode");
    bodyElement.classList.add("dark-mode");
  }
}

//////////////////////////////
//iletişim submit butonu
function showConfirmation() {
  if (window.confirm("Are you sure you want to send the form ?") == true) {
  }
}

///////////////////////////////

//ürün ekleme silme kısmı
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".btn");
  const shoppingCartContainer = document.querySelector(".product-cart");
  const totalContainer = document.querySelector(".total");

  const shoppingCart = [];

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productBox = this.closest(".box");
      const productName = productBox.querySelector("h3").textContent;
      const productImageSrc = productBox.querySelector("img").src;
      const productPrice = parseFloat(
        productBox.querySelector(".price").textContent.replace("$", "")
      );
      const productQuantity = parseFloat(
        productBox.querySelector(".quantity input").value
      );

      const product = {
        name: productName,
        image: productImageSrc,
        price: productPrice,
        quantity: productQuantity,
      };

      shoppingCart.push(product);
      updateShoppingCart();
    });
  });

  function updateShoppingCart() {
    shoppingCartContainer.innerHTML = "";

    let totalPrice = 0;

    shoppingCart.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("box");
      cartItem.innerHTML = `
              <i class="fa fa-trash" onclick="removeFromCart('${
                product.name
              }')"></i>
              <img src="${product.image}" width="50px" height="50px" alt="${
        product.name
      } image" />
              <div class="content">
                  <h3>${product.name}</h3>
                  <span class="price">$${(
                    product.price * product.quantity
                  ).toFixed(2)}</span>
                  <span class="quantity">qty : ${product.quantity} kg</span>
              </div>
          `;
      shoppingCartContainer.appendChild(cartItem);

      totalPrice += product.price * product.quantity;
    });

    totalContainer.textContent = `total : $${totalPrice.toFixed(2)}`;
  }

  // ürünü silme
  window.removeFromCart = function (productName) {
    const index = shoppingCart.findIndex(
      (product) => product.name === productName
    );
    if (index !== -1) {
      shoppingCart.splice(index, 1);
      updateShoppingCart();
    }
  };
});
