// ----------------------------      Variables       -------------------------------
const aside = document.querySelector("aside");
const nameCont = document.querySelector(".nameCont");
const shortBio = document.querySelector(".shortBio");
const footer = document.getElementById("footer");
const hamberBtn = document.querySelector(".hamberBtnCont");
// ----------------------------      Lang Selection Variables       -------------------------------
const selectedLang = document.querySelector(".selectedLang");
const langsCont = document.querySelector(".langsCont");
const faLangSelector = document.querySelector(".faLangSelector");
const enLangSelector = document.querySelector(".engLangSelector");
let langUpdater = localStorage.getItem("lang");

const imTitle = document.querySelector(".imTitle h2");
const bigName = document.querySelector(".fullName h2");
const menuBtns = document.querySelectorAll(".menuBtn");
const homeBtn = document.querySelector(".homeBtn");
const resumeBtn = document.querySelector(".resumeBtn");
const worksBtn = document.querySelector(".artworksBtn");
const blogBtn = document.querySelector(".blogBtn");
const downloadCV = document.querySelector(".downloadBtn");
const hireBtn = document.querySelector(".hireBtn");
const topMenu = document.querySelector(".topMenu");
const motionTitle = document.querySelector(".motionTitle");
const designerTitle = document.querySelector(".designerTitle");
const webTitle = document.querySelector(".webTitle");
const developerTitle = document.querySelector(".developerTitle");
const firstParag = document.querySelector(".firstParag");
const secondParag = document.querySelector(".secondParag");
const bigScreenBio = document.querySelector(".bigScreenBio");
const smallScreenBio = document.querySelector(".smallScreenBio");
const smallBioFirstP = document.querySelector(".smallBioFirstP");
const smallBioSecondP = document.querySelector(".smallBioSecondP");
const smallBioThirdP = document.querySelector(".smallBioThirdP");
const smallBioLastP = document.querySelector(".smallBioLastP");
const socials = document.querySelector(".socials");
const socialsText = document.querySelector(".socialsText h3");
const preloadDiv = document.querySelector(".preloadDiv");

let topMenuStyles =  getComputedStyle(topMenu);
// ----------------------------      Preload Animation       -------------------------------
window.addEventListener("load", ()=>{
    preloadDiv.classList.add("opacityZero");
});
preloadDiv.addEventListener("transitionend", ()=>{preloadDiv.style.display="none";});

// ----------------------------      Language Change       -------------------------------
if (!langUpdater){
    langUpdater = "en";
    localStorage.setItem("lang", "en");
}

langUpdaterFunc()

function langUpdaterFunc(){
    if (langUpdater === "en") {
// --------------------------  English Language Chosen -------------------------------
    selectedLang.innerHTML=`<img src="imgs/englandFlag.jpg" alt="English Language" width="25px">
                    EN
                    <i class="langArrow">&#8227;</i>`;
    selectedLang.style.fontFamily = "'Montserrat', sans-serif";

    bigName.textContent = "Reza Aghamohammadi";
    bigName.classList.remove("fullNameFa");
    imTitle.textContent = "I'm";

    if (topMenuStyles.flexDirection === "row-reverse") {
        topMenu.style.flexDirection = "row";
        topMenu.style.justifyContent = "flex-end";
    }

    for (let i = 0 ; i < 6 ; i++){menuBtns[i].classList.remove("menuBtnFa");}
    homeBtn.textContent = "Home"
    resumeBtn.textContent = "Resume"
    worksBtn.textContent = "Artworks"
    blogBtn.textContent = "Blog"
    hireBtn.textContent = "Hire Me"
    downloadCV.textContent = "Download CV"

    motionTitle.classList.remove("motionTitleFa");
    designerTitle.classList.remove("designerTitleFa");
    motionTitle.textContent = "Motion";
    designerTitle.textContent = "Designer";

    webTitle.classList.remove("webTitleFa");
    developerTitle.classList.remove("developerTitleFa");
    webTitle.textContent = "<WEB>";
    developerTitle.textContent = "Developer";

    bigScreenBio.classList.remove("bigScreenBioFa");
    firstParag.style.fontFamily = " 'Quicksand' , sans-serif ";
    secondParag.style.fontFamily = " 'Quicksand' , sans-serif ";
    firstParag.innerHTML = `
        <span class="boldRedText">Crazy</span>&nbsp;Motion Deisgner,
        <span class="boldRedText">&nbsp;Bold</span>&nbsp;Web Developer
        `;
    secondParag.innerHTML = `
       <span class="smallText">&nbsp;And</span>
       <span class="boldRedText">&nbsp;Creative</span>&nbsp;Content Writer
       <span class="smallText">&nbsp;&nbsp;Based in Tehran, Iran.</span>
       `;

    smallScreenBio.classList.remove("smallScreenBioFa");
    smallBioFirstP.style.fontFamily = " 'Quicksand' , sans-serif ";
    smallBioSecondP.style.fontFamily = " 'Quicksand' , sans-serif ";
    smallBioThirdP.style.fontFamily = " 'Quicksand' , sans-serif ";
    smallBioLastP.style.fontFamily = " 'Quicksand' , sans-serif ";
    smallBioFirstP.innerHTML = `<span class="boldRedText">Crazy</span>&nbsp;Motion Deisgner,`;
    smallBioSecondP.innerHTML = `<span class="boldRedText">Bold</span>&nbsp;Web Developer
                                 <span class="smallText">&nbsp;And</span>`;
    smallBioThirdP.innerHTML = `<span class="boldRedText">Creative</span>&nbsp;Content Writer`;
    smallBioLastP.innerHTML = `<span class="smallText">Based in Tehran, Iran.</span>`;

    socials.style.flexFlow = "row";
    socialsText.style.fontFamily = "'Quicksand' , sans-serif";
    socialsText.textContent = "Let's Chat!";

    }else{
// --------------------------------  Farsi Language Chosen -------------------------------
    selectedLang.innerHTML=`<img src="imgs/iranFlag.jpg" alt="Persian Language" width="25px">
                    فا
                    <i class="langArrow">&#8227;</i>`;
    selectedLang.style.fontFamily = "'Almarai', sans-serif";

    bigName.textContent = "!رضا آقامحمدی هستم";
    bigName.classList.add("fullNameFa");
    imTitle.textContent = "";

    if (topMenuStyles.flexDirection === "row") {
        topMenu.style.flexDirection = "row-reverse";
        topMenu.style.justifyContent = "flex-start";
    }

     for (let i = 0 ; i < 6 ; i++){menuBtns[i].classList.add("menuBtnFa");}
    homeBtn.textContent = "خانه"
    resumeBtn.textContent = "رزومه"
    worksBtn.textContent = "نمونه کارها"
    blogBtn.textContent = "بلاگ"
    hireBtn.textContent = "ارتباط با من"
    downloadCV.textContent = "دانلود رزومه"

    motionTitle.classList.add("motionTitleFa");
    designerTitle.classList.add("designerTitleFa");
    motionTitle.textContent = "موشن";
    designerTitle.textContent = "دیزاینر";

    webTitle.classList.add("webTitleFa");
    developerTitle.classList.add("developerTitleFa");
    webTitle.textContent = "<وب>";
    developerTitle.textContent = "دولوپر";

    bigScreenBio.classList.add("bigScreenBioFa");
    firstParag.style.fontFamily = " 'Lalezar', cursive , sans-serif ";
    secondParag.style.fontFamily = " 'Lalezar', cursive , sans-serif ";
        firstParag.innerHTML = `
        یک موشن دیزاینر     
        <span class="boldRedText">ماجراجو &nbsp،&nbsp</span>
        یک وب دولوپر     
        <span class="boldRedText">دقیق</span>
        `;
        secondParag.innerHTML = `
<span class="smallText">و &nbsp</span>        
        یک تولیدکننده محتوای
        <span class="boldRedText">خلاق &nbsp &nbsp</span>
        <span class="smallText">&nbspساکن ایران، تهران</span>
        `;

     smallScreenBio.classList.add("smallScreenBioFa");
     smallBioFirstP.style.fontFamily = " 'Lalezar', cursive , sans-serif ";
     smallBioSecondP.style.fontFamily = " 'Lalezar', cursive , sans-serif ";
     smallBioThirdP.style.fontFamily = " 'Lalezar', cursive , sans-serif ";
     smallBioLastP.style.fontFamily = " 'Lalezar', cursive , sans-serif ";
     smallBioFirstP.innerHTML = `</span>یک موشن دیزاینر <span class="boldRedText">ماجراجو`;
     smallBioSecondP.innerHTML = `یک وب دولوپر <span class="boldRedText">دقیق&nbsp&nbsp</span> 
<span class="smallText">و</span>`;
     smallBioThirdP.innerHTML = `</span>یک تولیدکننده محتوای <span class="boldRedText">خلاق`;
     smallBioLastP.innerHTML = `<span class="smallText">.  ساکن ایران، تهران</span>`;
    socials.style.flexFlow = "row-reverse";
    socialsText.style.fontFamily = "'Almarai', sans-serif";
    socialsText.textContent = ": من در شبکه های اجتماعی";
}}

// -----------------------------       new Lang       ----------------------------------------
selectedLang.addEventListener("click", function (){
    langsCont.classList.toggle("langsContDisplayer");
})

faLangSelector.addEventListener("click", function (){
    localStorage.setItem("lang", "fa");
    langUpdater = "fa";
    langUpdaterFunc();
    langsCont.classList.toggle("langsContDisplayer");
})

enLangSelector.addEventListener("click", function (){
    localStorage.setItem("lang", "en");
    langUpdater = "en";
    langUpdaterFunc();
    langsCont.classList.toggle("langsContDisplayer");
})

// -----------------------------      Mobile Menu       ----------------------------------------
function showMobileMenu(e) {
    aside.classList.toggle("bluring");
    topMenu.classList.toggle("menuLefter");
    nameCont.classList.toggle("bluring");
    shortBio.classList.toggle("bluring");
    socials.classList.toggle("bluring");
    footer.classList.toggle("bluring");
    e.stopPropagation();
}

hamberBtn.addEventListener("click", showMobileMenu);
document.addEventListener("click", function(){
    if (topMenu.classList.contains("menuLefter")){
        showMobileMenu();
    }
});
