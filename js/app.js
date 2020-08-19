var popUpBox = ` <div id="cart-parent-box">
<div class="cart-container-box">
  <div id="cart-top">
    <h2>SHOPPING CART</h2>
    <button id="cart-close-btn">
    <i class="fas fa-times" ></i>
    </button>
  </div>



  <div class="cart-item-box">
    <div id="cart-item-box-1">
      <div id="cart-item">
        <a href="#">
          <img src="image/Leica_S-002_medium.webp" alt="item"
        /></a>
      </div>
      <div id="item-detail">
        <a href="#">Leica S (Typ 006) / 70mm Lens Set</a>
      </div>
    </div>
    <div id="cart-item-box-2">
      <div class="item-times nice-number">
        <button class="item-time-minus">-</button>
        <input
          type="number"
          class="item-times-input"
          value="1"
          min="0"
          
        />
        <button class="item-time-plus">+</button>
      </div>
      <div id="item-price">$<span class="item-price-value">15,995</span><span class="zero">00</span></div>
      <button class="item-close-btn-box">
        <i class="fas fa-times item-close-btn" ></i>
      </button>
    </div>
  </div>



  <div class="cart-item-box">
  <div id="cart-item-box-1">
    <div id="cart-item">
      <a href="#">
        <img src="image/Leica_S-002_medium.webp" alt="item"
      /></a>
    </div>
    <div id="item-detail">
      <a href="#">Leica S (Typ 006) / 70mm Lens Set</a>
    </div>
  </div>
  <div id="cart-item-box-2">
    <div class="item-times nice-number">
      <button class="item-time-minus">-</button>
      <input
        type="number"
        class="item-times-input"
        value="1"
        min="0"
        
      /><button class="item-time-plus">+</button>
    </div>
    <div id="item-price">$<span class="item-price-value">15,995</span><span class="zero">00</span></div>
    <button class="item-close-btn-box">
      <i class="fas fa-times item-close-btn" ></i>
    </button>
  </div>
</div>


  
  <div id="cart-bottom">
    <div id="total-amount">
      <div id="amount-text">Subtotal</div>
      <div id="item-total-amount">
        $<span class="total-amount-value"></span><span class="zero">00</span>
      </div>
    </div>
    <div id="bottom-text">
      Shipping, taxes, and discounts will be calculated at checkout.
    </div>
    <button id="check-out">
      <i class="fas fa-shopping-cart"></i> CHECKOUT
    </button>
  </div>
</div>
</div>
<div class="a"></div>`;
// No Formater
// Add Element in HTML with ID name = pop-up-tag
var tagHtml = document.getElementById("pop-up-tag");

// Select Button Id
var btn = document.getElementById("btn-pop");

btn.addEventListener("click", function () {
  tagHtml.innerHTML += popUpBox;

  var closeBtn = document.getElementById("cart-close-btn");
  closeBtn.addEventListener("click", function () {
    var box = document.getElementById("cart-parent-box");
    // box.style.transition = "1s all ease-out";
    box.style.animation = "fadeOutBox 1s";
    setTimeout(function () {
      tagHtml.innerHTML = "";
    }, 1000);
  });
  // Remove Item From Cart Function
  var removeCartItemButtons = document.getElementsByClassName(
    "item-close-btn-box"
  );

  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", function (event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.parentElement.remove();
      updateCartTotal();
    });
  }
  ///////////////////////////////////////////////////////////////
  // Add Quantity Function
  var quantityInputs = document.getElementsByClassName("item-times-input");
  var incQuantity = document.getElementsByClassName("item-time-plus");
  var decQuantity = document.getElementsByClassName("item-time-minus");

  ///////////////////////////////////////////////////////////////
  // Increase Item
  for (var i = 0; i < incQuantity.length; i++) {
    var increase = incQuantity[i];
    increase.addEventListener("click", increaseValue);
  }
  function increaseValue() {
    this.previousElementSibling.value++;
    updateCartTotal();
  }
  ///////////////////////////////////////////////////////////////
  // Decrease Item
  for (var i = 0; i < decQuantity.length; i++) {
    var decrease = decQuantity[i];
    decrease.addEventListener("click", decreaseValue);
  }
  function decreaseValue() {
    if (this.nextElementSibling.value > 1) {
      this.nextElementSibling.value--;
      updateCartTotal();
    }
  }
  ///////////////////////////////////////////////////////////////

  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  function quantityChanged(event) {
    updateCartTotal();
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
  }

  ///////////////////////////////////////////////////////////////
  // Update Total Price Function
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName(
      "cart-item-container"
    )[0];
    var cartRows = document.getElementsByClassName("cart-item-box");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName("item-price-value")[0];
      var quantityElement = cartRow.getElementsByClassName(
        "item-times-input"
      )[0];

      var price = parseFloat(priceElement.innerText.replace(",", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }

    document.getElementsByClassName(
      "total-amount-value"
    )[0].innerText = new Intl.NumberFormat().format(total);
  }
  updateCartTotal();

  ///////////////////////////////////////////////////////////////
});
