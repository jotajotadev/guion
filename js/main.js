let mycard = document.querySelectorAll(".card");
let menu = document.getElementById("menu");
let buttonShowNav = document.getElementById("buttonForShowNav");

// Toggle menu mobile
buttonShowNav.addEventListener("click", function(){
    menu.classList.toggle("header__nav-show");
});


// Add class Card- Expand to Small Cards.
for(let e of mycard){
    e.addEventListener("click", function(){
        let cardExpand = document.querySelector(".card-expand");
        if(window.innerWidth <= 767){
            if(cardExpand) {
                console.log("no se vuelve a ejecutar")
            } else {
                e.className = "card-expand";
                let backgrounCard = e.parentElement;
                backgrounCard.className = "bacground-card-active";
                let close = document.createElement("img");
                close.id = "close-card";
                close.setAttribute("src", "img/icon-close.png");
                backgrounCard.insertBefore(close, e);
                console.log(close);
                close.addEventListener("click", function(){
                    backgrounCard.className = "bacground-card";
                    e.className = "card";
                    close.style.display = "none";
                });
            }

        } else {
            console.log("no se ejecutara");
        }
    });
}

