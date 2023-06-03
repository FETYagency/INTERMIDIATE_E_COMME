
const PRODUCT = {
    current:`125.00`,
    discount:`50%`,
    old:"250.00",
}
const VIEW =  window.matchMedia("(width>700px)");
document.querySelector(".CURR_PRICE").textContent += PRODUCT.current;
document.querySelector(".discount").textContent = PRODUCT.discount;
document.querySelector(".OLD_PRICE").textContent += PRODUCT.old;
const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
]



const thumb_bar = document.querySelector('.desktop_thumbs');
const curr_img = document.querySelectorAll(".product_img");
const overlay = document.querySelector(".OVERLAY")
const thumb_img_container = document.querySelectorAll(`.desktop_thumbs>div`); 


const pop_up = document.querySelector(".pop_up")
const close_pop =  document.querySelector(".close_pop")
const thumb_img_container_pop = document.querySelectorAll(`.pop_up .desktop_thumbs>div`);
const thumb_bar_pop = document.querySelector('.pop_up .desktop_thumbs');
const pop_overlay = document.querySelector(".pop_overlay");




curr_img[0].addEventListener("click", ()=>{
    if(VIEW.matches){
        pop_up.classList.remove("hidden");
        pop_overlay.style.display= "block";
    }
})
close_pop.addEventListener("click", (()=>{
    pop_up.classList.add("hidden");
    pop_overlay.style.display= "none";
} ))

thumb_bar_pop.querySelectorAll("img").forEach((e)=>{
    const x =e;
    e.addEventListener("click", ()=>{
        curr_img.forEach(e=>e.src=images[x.dataset.index])

        for (let i = 0; i < thumb_img_container_pop.length; i++) {
            if(thumb_img_container_pop[i].classList.contains("focused")){
                thumb_img_container_pop[i].classList.remove("focused")
            }
        }

        if(thumb_img_container_pop[e.dataset.index].classList.contains("focused")===false){
            thumb_img_container_pop[e.dataset.index].classList.add("focused")
        }
    })
})




thumb_bar.querySelectorAll("img").forEach((e)=>{
    const x =e;
    e.addEventListener("click", ()=>{
        curr_img.forEach(e=>e.src=images[x.dataset.index])

        for (let i = 0; i < thumb_img_container.length; i++) {
            if(thumb_img_container[i].classList.contains("focused")){
                thumb_img_container[i].classList.remove("focused")
            }
        }

        if(thumb_img_container[e.dataset.index].classList.contains("focused")===false){
            thumb_img_container[e.dataset.index].classList.add("focused")
        }
    })
})




const icon = document.querySelector(".CLICKABLE_ICON");
const nav = document.querySelector(".MOBILE_NAV")

// =====> mobile nav logic
// =====> open state 
// =====> close state
function NAV_STATE(){
    if(icon.dataset.state==="close"){
        icon.setAttribute("data-state","open")
        icon.querySelector("img").src="../images/icon-close.svg"
        nav.style.transform="translateX(0%)"
        overlay.style.transform="translateX(0%)"
        overlay.style.display="block"
    }else if(icon.dataset.state==="open"){
        icon.setAttribute("data-state","close")
        icon.querySelector("img").src="../images/icon-menu.svg"
        nav.style.transform="translateX(-100%)"
        overlay.style.transform="translateX(100%)"
    }
}



icon.addEventListener("click", NAV_STATE)


// =======> shopping carte logic
// =======> open
// =======> close



const cart_icon = document.querySelector(".CART_ICON");
const list = document.querySelector(".SHOPPING_LIST");
const list_shoes = document.querySelector(".LIST_GOODS");



function CARTE_STATE(){
    if(VIEW.matches===false){
        if(cart_icon.dataset.state==="close"){
            cart_icon.setAttribute('data-state','open')
            list.style.transform="translate(-50%, 0%)";
            list.style.opacity="1";
            list.style.pointerEvents="all";
        }else if(cart_icon.dataset.state==="open"){
            cart_icon.setAttribute('data-state','close')
            list.style.transform="translate(-50%, -20px)";
            list.style.opacity="0";
            list.style.pointerEvents="none";
        }
    } else if(VIEW.matches===true){
        if(cart_icon.dataset.state==="close"){
            cart_icon.setAttribute('data-state','open')
            list.style.transform="translate(0%, 0%)";
            list.style.opacity="1";
            list.style.pointerEvents="all";
        }else if(cart_icon.dataset.state==="open"){
            cart_icon.setAttribute('data-state','close')
            list.style.transform="translate(0%, -20px)";
            list.style.opacity="0";
            list.style.pointerEvents="none";
        } 
    }
}


cart_icon.addEventListener("click", CARTE_STATE)
list_shoes.innerHTML= `<p>Your cart is empty.</p>`;



// =====> building the gallery logic 
// =====> the left scroll 
// =====> the right scroll 
const arrow = document.querySelectorAll(".arrows")

let counter = 0;


arrow.forEach(e=>e.addEventListener("click", async function(){
    
        return await new Promise((resolve) => {
    
            if(e.classList.contains("left")){
                resolve(`found`)
                e.style.transform="translate(-10px, -50%)";
    
                counter = counter===0 ?3:counter-1;

                if(VIEW){
                    curr_img.forEach(e=>e.src=`${images[counter]}`);
                    if(thumb_img_container_pop[counter].classList.contains("focused")===false){
                        for (let i = 0; i < thumb_img_container_pop.length; i++) {
                            const element = thumb_img_container_pop[i];
                            if(element.classList.contains("focused")){
                                element.classList.remove("focused")
                            }
                        }
                        thumb_img_container_pop[counter].classList.add("focused")
                    }

                    
                    if(thumb_img_container[counter].classList.contains("focused")===false){
                        for (let i = 0; i < thumb_img_container.length; i++) {
                            const element = thumb_img_container[i];
                            if(element.classList.contains("focused")){
                                element.classList.remove("focused")
                            }
                        }
                        thumb_img_container[counter].classList.add("focused")
                    }
                }
            }
            if(e.classList.contains("right")){
                resolve(`found`)
                e.style.transform="translate(10px, -50%)"
                counter = counter===3 ?0:counter+1;

                if(VIEW){
                    curr_img.forEach(e=>e.src=`${images[counter]}`);
                    if(thumb_img_container_pop[counter].classList.contains("focused")===false){
                        for (let i = 0; i < thumb_img_container_pop.length; i++) {
                            const element = thumb_img_container_pop[i];
                            if(element.classList.contains("focused")){
                                element.classList.remove("focused")
                            }
                        }
                        thumb_img_container_pop[counter].classList.add("focused")
                    }
                    

                    if(thumb_img_container[counter].classList.contains("focused")===false){
                        for (let i = 0; i < thumb_img_container.length; i++) {
                            const element = thumb_img_container[i];
                            if(element.classList.contains("focused")){
                                element.classList.remove("focused")
                            }
                        }
                        thumb_img_container[counter].classList.add("focused")
                    }
                }

            }
    
        })
        .then((res)=>{
    
            setTimeout(()=>{
                e.style.transform="translate(0px, -50%)"
            },200)
    
        })
}))



const counter_container = document.querySelector(".counter");
const units = document.querySelector(".units");
const counter_btn = document.querySelectorAll(".counter_btn");
const btn_add = document .querySelector("[type='click']");


let x = 0;
counter_btn.forEach(e=>e.addEventListener("click", function(){
    if(e.classList.contains("plus")){
        x++
        units.textContent=x;
        if(x>0){
            btn_add.addEventListener("click", ()=>{
                cart_icon.classList.add("not_empty")
                cart_icon.dataset.number = x
                
                list_shoes.classList.add("exist")
    
                list_shoes.innerHTML=`
                    <div class="product">
                        <figure>
                        <img src="images/image-product-1-thumbnail.jpg" alt="">
                        <figcaption>
                            <p class="summ"
                               <p>Fall Limited Edition Sneakers <br> ${PRODUCT.current} <span>&#10005;</span>  ${cart_icon.dataset.number} <strong>$${Number(PRODUCT.current*Number(cart_icon.dataset.number))} </strong>
                            </p>
                        </figcaption>
                        <div class="delete">
                            <img src="images/icon-delete.svg" alt="">
                        </div>
                        <button class ="checkout">Checkout</button>
                        </figure>
                    </div>`
                ;
    
    
                document.querySelector(".delete").addEventListener("click",()=>{
                    list_shoes.innerHTML= `<p>Your cart is empty.</p>`;
                    x=0
                    units.textContent=x;
                    cart_icon.dataset.number = x
                    cart_icon.classList.remove("not_empty")
    
                })
                
            });
        }
        
    }else if(x<2){

        list_shoes.innerHTML= `<p>Your cart is empty.</p>`;
        x=0
        units.textContent=x;
        cart_icon.dataset.number = x
        cart_icon.classList.remove("not_empty")
        
    }else if(e.classList.contains("minus")&& x>0 ){
        x--
        units.textContent=x
        
        btn_add.addEventListener("click", ()=>{
                x===0?cart_icon.classList.remove("not_empty"):cart_icon.classList.add("not_empty")
                cart_icon.dataset.number = x
    
                list_shoes.classList.add("exist")
    
                x>0
                ?list_shoes.innerHTML=`
                    <div class="product">
                        <figure>
                        <img src="images/image-product-1-thumbnail.jpg" alt="">
                        <figcaption>
                            <p class="summ"
                               <p>Fall Limited Edition Sneakers <br> ${PRODUCT.current} <span>&#10005;</span>  ${cart_icon.dataset.number} <strong>$${Number(PRODUCT.current*Number(cart_icon.dataset.number))} </strong>
                            </p>
                        </figcaption>
                        <div class="delete">
                            <img src="images/icon-delete.svg" alt="">
                        </div>
                        <button class ="checkout">Checkout</button>
                        </figure>
                    </div>`
                :list_shoes.innerHTML= `<p>Your cart is empty.</p>`;
                
                document.querySelector(".delete").addEventListener("click",()=>{
                    list_shoes.innerHTML= `<p>Your cart is empty.</p>`;
                    x=0
                    units.textContent=x;
                    cart_icon.dataset.number = x
                    cart_icon.classList.remove("not_empty")
                })
    
            });


    }

}))
  
