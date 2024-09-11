/* Image Filter Section */ 

const allFilterItems = document.querySelectorAll('.filter-item'); // ირჩევს ყველა ელემენტს, რომელსაც აქვს კლასი '.filter-item'.
const allFilterBtns = document.querySelectorAll('.filter-btn'); // ირჩევს ყველა ელემენტს, რომელსაც აქვს კლასი '.filter-btn'.

// როდესაც გვერდი ჩაიტვირთება, მეორე ღილაკს ამატებს 'active-btn' კლასს.
window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[1].classList.add('active-btn');
});

// ყველა ღილაკისთვის დამატებულია 'click' მოვლენა, რომელიც იძახებს ფუნქციას showFilteredContent.
allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

// ფუნქცია, რომელიც აჩვენებს ფილტრულ შინაარსს და აშორებს 'active-btn' კლასს სხვა ღილაკებს.
function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){ // თუ ელემენტს აქვს შესაბამისი ID, აჩვენებს მას.
            resetActiveBtn(); // ასუფთავებს 'active-btn' კლასს ყველა ღილაკიდან.
            btn.classList.add('active-btn'); // ამატებს 'active-btn' კლასს არჩეულ ღილაკს.
            item.style.display = "block"; // აჩვენებს ფილტრირებულ ელემენტს.
        } else {
            item.style.display = "none"; // არ აჩვენებს არაელემენტებს.
        }
    });
}

// ფუნქცია, რომელიც აშორებს 'active-btn' კლასს ყველა ღილაკიდან.
function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}


/* Shopping Cart Section */ 

// თუ გვერდი ჩატვირთვის პროცესშია, ეკითხება 'DOMContentLoaded' მოვლენას.
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready(); // თუ უკვე ჩატვირთულია, მაშინ პირდაპირ იძახებს 'ready' ფუნქციას.
}

function ready(){
    var removeCartItemButton = document.getElementsByClassName('btn-danger'); // ირჩევს 'btn-danger' კლასის ელემენტებს (მოშორების ღილაკი).
    for (var i = 0 ; i < removeCartItemButton.length; i++){
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem); // ამატებს 'click' მოვლენა, რომ ამოიღოს პროდუქტი კალათიდან.
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input'); // ირჩევს რაოდენობის შესაყვან ველებს.
    for(var i = 0 ;i < quantityInputs.length ; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged); // ამატებს 'change' მოვლენა, რომ შეცვალოს რაოდენობა.
    }
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button'); // ირჩევს კალათაში დამატების ღილაკებს.
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked); // ამატებს 'click' მოვლენა, რომ დაამატოს პროდუქტი კალათაში.
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked); // "შესყიდვის" ღილაკზე ამატებს 'click' მოვლენა.
}

function purchaseClicked(){
    alert('Thank you for your purchase!!!'); // აჩვენებს შეტყობინებას შესყიდვის შესახებ.
    var cartItems = document.getElementsByClassName('cart-items')[0]; 
    while(cartItems.hasChildNodes()){ // აშორებს ყველა პროდუქტს კალათიდან.
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal(); // განაახლებს კალათის მთლიანი თანხა.
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove(); // აშორებს პროდუქტის ჩანაწერს.
    updateCartTotal(); // განაახლებს კალათის მთლიანი თანხა.
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1; // თუ რაოდენობა არასწორია, აწესებს მინიმალურ მნიშვნელობას 1.
    }
    updateCartTotal(); // განაახლებს მთლიანი თანხა.
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText; // იღებს პროდუქტის დასახელებას.
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText; // იღებს პროდუქტის ფასს.
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src; // იღებს პროდუქტის სურათის URL-ს.
    addItemToCart(title, price, imageSrc); // ამატებს პროდუქტს კალათაში.
    updateCartTotal(); // განაახლებს მთლიანი თანხა.
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('tr'); // ქმნის ახალ ტრ-ს პროდუქტების ცხრილში.
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    // ამოწმებს, ხომ არ არის უკვე კალათაში ეს პროდუქტი.
    for (i = 0; i< cartItemNames.length ; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item already has added to the cart!');
            return;
        }
    }

    // აყენებს პროდუქტის სახელს, ფასს, რაოდენობას და სურათს.
    var cartRowContents = `
        <td class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="50" height="50">
            <span class="cart-item-title">${title}</span>                  
        </td>
        <td class="cart-item cart-column">
            <span class="cart-price cart-column">${price}</span>
        </td>
        <td class="cart-item cart-column">
            <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
            <button class="btn btn-danger" type="button">Remove</button>
        </td>        
    `;
     
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem); // "Remove" ღილაკის დამატება.
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged); // რაოდენობის ველის მოვლენის დამატება.
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    // ითვლის მთლიანი თანხას.
    for (var i = 0 ; i< cartRows.length ; i++){
        var cartRow =cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('Rs ', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100; // რიცხვის დამრგვალება.
    document.getElementsByClassName('cart-total-price')[0].innerText = total + '.00' + '$'; // აჩვენებს მთლიანი თანხას.
}
