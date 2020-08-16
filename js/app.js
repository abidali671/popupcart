var popUpBox = ` <div id="cart-parent-box">
<div id="cart-container-box">
  <div id="cart-top">
    <h2>SHOPPING CART</h2>
    <button id="cart-close-btn">
    <i class="fas fa-times" ></i>
    </button>
  </div>
  <div id="cart-item-box">
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
      <div id="item-times">
        <button id="item-time-minus">-</button>
        <input
          type="number"
          id="item-times-input"
          value="1"
          min="0"
          data-line="1"
        />
        <button id="item-time-plus">+</button>
      </div>
      <div id="item-price">$<span id="item-price-value">15,995</span><span class="zero">00</span></div>
      <button id="item-close-btn-box">
        <i class="fas fa-times" id="item-close-btn"></i>
      </button>
    </div>
  </div>

  




  <div id="cart-bottom">
    <div id="total-amount">
      <div id="amount-text">Subtotal</div>
      <div id="item-total-amount">
        $<span id="total-amount-value"></span><span class="zero">00</span>
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
var formater = new Intl.NumberFormat("en");
// Add Element in HTML with ID name = pop-up-tag
var tagHtml = document.getElementById("pop-up-tag");

// Select Button Id
var btn = document.getElementById("btn-pop");

btn.addEventListener("click", function () {
  tagHtml.innerHTML += popUpBox;

  // Var
  var itemBox = document.getElementById("cart-item-box");
  var totalPrice = document.getElementById("total-amount-value");
  var itemPrice = document.getElementById("item-price-value");
  totalPrice.textContent = formater.format(
    itemPrice.textContent.replace(/,/g, "")
  );

  var closeBtn = document.getElementById("cart-close-btn");
  closeBtn.addEventListener("click", function () {
    var box = document.getElementById("cart-parent-box");
    // box.style.transition = "1s all ease-out";
    box.style.animation = "fadeOutBox 1s";
    setTimeout(function () {
      tagHtml.innerHTML = "";
    }, 1000);
  });
  // Item Increment and Decrement Function
  var plus = document.getElementById("item-time-plus");
  var minus = document.getElementById("item-time-minus");
  var input = document.getElementById("item-times-input");
  var inputValue = input.value;

  // var inputValue = 1;

  plus.addEventListener("click", function () {
    input.value++;
    inputValue++;

    // Change Item Price on Increment and Decrement

    totalPrice.textContent = formater.format(
      Number(itemPrice.textContent.replace(/,/g, "")) * inputValue
    );
  });

  minus.addEventListener("click", function () {
    if (input.value == 1) {
      return;
    } else {
      inputValue--;
      input.value--;

      // Change Item Price on Increment and Decrement
      totalPrice.textContent = formater.format(
        Number(itemPrice.textContent.replace(/,/g, "")) * inputValue
      );
    }
  });

  var itemRmBtn = document.getElementById("item-close-btn-box");
  itemRmBtn.addEventListener("click", function () {
    console.log(itemRmBtn.parentNode.parentNode.parentNode);
    itemRmBtn.parentNode.parentNode.parentNode.removeChild(itemBox);
  });
});
