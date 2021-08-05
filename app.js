const hamberBtn = document.querySelector(".hamberBtnCont");

hamberBtn.addEventListener("click", function (){
    const  main = document.querySelector("main");
    const aside = document.querySelector("aside");

    if(main.classList.contains("bluring")){
        main.classList.remove("bluring");
        aside.classList.remove("bluring");
    }else {
        main.classList.add("bluring");
        aside.classList.add("bluring");
    }

    const menuDiv = document.querySelector(".mobileMenu");

    if(menuDiv.classList.contains("menuLefter")){
        menuDiv.classList.remove("menuLefter");
    }else {
        menuDiv.classList.add("menuLefter");
    }
});

