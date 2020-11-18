let mycard = document.querySelectorAll(".card");
let menu = document.getElementById("menu");
let buttonShowNav = document.getElementById("buttonForShowNav");
buttonShowNav.addEventListener("click", function(){
    let navExist = document.querySelector(".header__nav-show");
    if(navExist) {
        menu.setAttribute("class", "header__nav");
        console.log(menu);
    } else {
        menu.setAttribute("class", "header__nav-show");
        console.log(menu);
    }
});

for(let e of mycard){
    e.addEventListener("click", function(){
        let cardExpand = document.querySelector(".card-expand");
        let viewportWidth = window.innerWidth;
        if(viewportWidth <= 767){
            if(cardExpand) {
                console.log("no se vuelve a ejecutar")
            } else {
                e.className = "card-expand";
                let bc = e.parentElement;
                bc.className = "bacground-card-active";
                console.log(bc);
                let close = document.createElement("img");
                close.id = "close-card";
                close.setAttribute("src", "img/icon-close.png");
                // let contentClose = document.createTextNode("X");
                // close.appendChild(contentClose);
                bc.insertBefore(close, e);
                console.log(close);
                close.addEventListener("click", function(){
                    bc.className = "bacground-card";
                    e.className = "card";
                    close.style.display = "none";
                });
            }

        } else {
            console.log("no se ejecutara");
        }
    });
    // let close = document.getElementById("close-card")
}
