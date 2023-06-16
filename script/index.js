const menuBtn = document.querySelector(".CLICKABLE_ICON");
const menu = document.querySelector(".MOBILE_NAV")
const overlay = document.querySelector(".OVERLAY")
function mobileMenuState(){
    if(menuBtn.dataset.state==="close"){
        menu.style.transform="translateX(0%)";
        overlay.style.transform="translateX(0%)";
        menuBtn.setAttribute("data-state", "open");
    }else{
        menu.style.transform="translateX(-100%)";
        overlay.style.transform="translateX(-100%)";
        menuBtn.setAttribute("data-state", "close");
    }
}
menuBtn.addEventListener("click", mobileMenuState)


// genrating images for the displayer
const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
];
const displayer = document.querySelector(".product_img");
const displayerPopUp = document.querySelector(".product_img_popUp")
const arrows = document.querySelectorAll(".arrows");
const desktop = window.matchMedia("(min-width:900px)")


let currentIndex = 0;
let currentDirection = "forward";
function* getImg() {
    while (true){
        if (currentDirection === "forward") {
            currentIndex = (currentIndex + 1) % 4;
        } else if (currentDirection === "backward") {
            currentIndex = (currentIndex - 1 + 4) % 4;
        }
        yield currentIndex;
    }
}
const imageGenerator = getImg();
arrows.forEach((e) => {
  e.addEventListener("click", function () {
    if (e.classList.contains("left")) {
      currentDirection = "backward";


      e.style.transform="translate(-10px, -50%)"
      setTimeout(()=>{
          e.style.transform="translate(0px, -50%)" 
      },200)
    } else {
      currentDirection = "forward";

      
      e.style.transform="translate(10px, -50%)"
      setTimeout(()=>{
          e.style.transform="translate(0px, -50%)" 
      },200)
    }
    currentIndex = imageGenerator.next().value;
    
    desktop.matches===false 
    ?displayer.src = images[currentIndex]
    :displayerPopUp.src =images[currentIndex];

  });
});

const popUp = document.querySelector(".pop_up");
const popUpOverlay = document.querySelector(".pop_overlay");
const closePopUp = document.querySelector(".close_pop")
const thumbs = document.querySelectorAll(".desktop_thumbs img")

thumbs.forEach(e=>{
    e.addEventListener("click", function(){
        popUp.classList.contains("hidden")
        ?displayer.src = images[e.dataset.index]
        :displayerPopUp.src = images[e.dataset.index];
        thumbs.forEach(ele=>ele.parentElement.classList.remove("focused"))
        e.parentElement.setAttribute("class", "focused")
    })
})

displayer.addEventListener("click", function(){
    if(desktop.matches===true){
        popUp.classList.contains("hidden")
        ?popUp.classList.remove("hidden")
        :popUp.classList.add("hidden")
    }
})
closePopUp.addEventListener("click", function(){
        popUp.classList.contains("hidden")
        ?popUp.classList.remove("hidden")
        :popUp.classList.add("hidden")
})

const PRODUCT = {
    current:`125.00`,
    discount:`50%`,
    old:"250.00",
}
document.querySelector(".CURR_PRICE").textContent += PRODUCT.current;
document.querySelector(".discount").textContent = PRODUCT.discount;
document.querySelector(".OLD_PRICE").textContent += PRODUCT.old;

const cart = document.querySelector(".CART_ICON")
const list = document.querySelector(".SHOPPING_LIST")
const cartContent = document.querySelector(".LIST_GOODS")

const counterBtn = document.querySelectorAll(".counter_btn")
const units = document.querySelector(".units")
const add = document.querySelector("[type='click']")

const deleteContent = document.querySelector(".delete");

function cartState(){
    if(cart.dataset.state==="close"){
        list.style.transform="translate(-50%, 0px)";
        list.style.opacity="1";
        list.style.pointerEvents="fill"
        cart.setAttribute("data-state", "open");
    }else{
        list.style.transform="translate(-50%, -20px)";
        list.style.opacity="0";
        list.style.pointerEvents="none"
        cart.setAttribute("data-state", "close");
    }
}
let x = 0
counterBtn.forEach(e=>{
    e.addEventListener("click", function(){
        e.classList.contains("plus")
        ?x+=1
        :x-=1;
        x = x < 0 ? 0: x
        units.textContent=x
        
    })
})
function addToCarte(){
    cart.dataset.number=x;
    x>0
    ?cart.setAttribute("class","CART_ICON not_empty")
    :cart.setAttribute("class","CART_ICON")

    console.log(x)

    if(cart.classList.contains("not_empty")){
        cartContent.innerHTML=`                   
        <div class="product">
            <figure>
                <img src="images/image-product-1-thumbnail.jpg" alt="">
                <figcaption>
                    <p class="summ"
                    <p>Fall Limited Edition Sneakers <br> ${PRODUCT.current} <span>&#10005;</span>${x}<strong>$${Number(PRODUCT.current*x)} </strong>
                    </p>
                </figcaption>
                <div class="delete">
                    <img src="images/icon-delete.svg" alt="">
                </div>
                <button class ="checkout">Checkout</button>
            </figure>
        </div>
        `;

        const deleteContent = document.querySelector(".delete");

        deleteContent.addEventListener("click", function(){
            cartContent.innerHTML= `<p>Your cart is empty.</p>`;
            cart.setAttribute("class","CART_ICON")
            cart.dataset.number=0;
        })
    }else{
        cartContent.innerHTML= `<p>Your cart is empty.</p>`;
    }
    
}

add.addEventListener("click", addToCarte)
cart.addEventListener("click", cartState)