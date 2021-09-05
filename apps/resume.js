// ----------------------------      Variables       -------------------------------
const hamberBtn = document.querySelector(".hamberBtnCont");
const hamberTopLine = document.querySelector(".hamberTopLine");
const hamberMiddleLine = document.querySelector(".hamberMiddleLine");
const hamberBottomLine = document.querySelector(".hamberBottomLine");
// ----------------------------      Lang Selection Variables       -------------------------------
const selectedLang = document.querySelector(".selectedLang");
const langsCont = document.querySelector(".langsCont");
const faLangSelector = document.querySelector(".faLangSelector");
const enLangSelector = document.querySelector(".engLangSelector");
let langUpdater = localStorage.getItem("lang");

const topMenu = document.querySelector(".topMenu");
const topMenuBtnConts = document.querySelectorAll(".topMenuBtnCont");
const menuBtns = document.querySelectorAll(".menuBtn");
const homeBtn = document.querySelector(".homeBtn");
const resumeBtn = document.querySelector(".resumeBtn");
const worksBtn = document.querySelector(".artworksBtn");
const blogBtn = document.querySelector(".blogBtn");
const downloadCV = document.querySelector(".downloadBtn");
const hireBtn = document.querySelector(".hireBtn");

const preloadDiv = document.querySelector(".preloadDiv");

// ----------------------------      Preload Animation       -------------------------------
window.addEventListener("load", ()=>{
    preloadDiv.classList.add("opacityZero");
});

preloadDiv.addEventListener("animationend", ()=>{
    preloadDiv.style.display="none";
});

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


        if (topMenu.classList.contains("topMenuFa")){
            topMenu.classList.remove("topMenuFa");
        }

        for (let i = 0 ; i < 6 ; i++){menuBtns[i].classList.remove("menuBtnFa");}
        homeBtn.textContent = "Home";
        resumeBtn.textContent = "Resume";
        worksBtn.textContent = "Artworks";
        blogBtn.textContent = "Blog";
        hireBtn.textContent = "Contact Me";
        downloadCV.textContent = "Download CV";


    }else{
// --------------------------------  Farsi Language Chosen -------------------------------
        selectedLang.innerHTML=`<img src="imgs/iranFlag.jpg" alt="Persian Language" width="25px">
                    فا
                    <i class="langArrow">&#8227;</i>`;
        selectedLang.style.fontFamily = "'Almarai', sans-serif";


        if (!topMenu.classList.contains("topMenuFa")){
            topMenu.classList.add("topMenuFa");
        }

        for (let i = 0 ; i < 6 ; i++){menuBtns[i].classList.add("menuBtnFa");}
        homeBtn.textContent = "خانه";
        resumeBtn.textContent = "رزومه";
        worksBtn.textContent = "نمونه کارها";
        blogBtn.textContent = "بلاگ";
        hireBtn.textContent = "ارتباط با من";
        downloadCV.textContent = "دانلود رزومه";

    }}

// -----------------------------       new Lang       ----------------------------------------
selectedLang.addEventListener("click", function (e){
    langsCont.classList.toggle("langsContDisplayer");
    e.stopPropagation();
})

faLangSelector.addEventListener("click", function (e){
    localStorage.setItem("lang", "fa");
    langUpdater = "fa";
    langUpdaterFunc();
    langsCont.classList.toggle("langsContDisplayer");
    e.stopPropagation();
})

enLangSelector.addEventListener("click", function (e){
    localStorage.setItem("lang", "en");
    langUpdater = "en";
    langUpdaterFunc();
    langsCont.classList.toggle("langsContDisplayer");
    e.stopPropagation();
})

// -----------------------------      Mobile Menu       ----------------------------------------
function showMobileMenu(e) {
    topMenu.classList.toggle("menuLefter");

    if (langsCont.classList.contains("langsContDisplayer")){
        langsCont.classList.toggle("langsContDisplayer");
    }
    hamberTopLine.classList.toggle("hamberTopLineAni");
    hamberMiddleLine.classList.toggle("hamberMiddleLineAni");
    hamberBottomLine.classList.toggle("hamberBottomLineAni");

    topMenuBtnConts.forEach(topMenuBtnCont => {
        topMenuBtnCont.classList.toggle("topMenuBtnContPush")
    });

    e.stopPropagation();
}

hamberBtn.addEventListener("click", showMobileMenu);
document.addEventListener("click", function(){
    if (langsCont.classList.contains("langsContDisplayer")){
        langsCont.classList.remove("langsContDisplayer");
    }
    if (topMenu.classList.contains("menuLefter")){
        showMobileMenu();
    }
});

// --------------------------       Intersection Observers      ---------------------------
const developCont = document.querySelector(".developCont");
const skillsSection = document.querySelector(".resumeSkillsSec");
const resumeEduSec = document.querySelector(".resumeEduSec");
const resumeExpSec = document.querySelector(".resumeExpSec");
const writingCont = document.querySelector(".writingCont");
const brandsMotherCont = document.querySelector(".brandsMotherCont");
const brandsPics = document.querySelectorAll(".brandsPic");
const EduTitleConts = document.querySelectorAll(".EduTitleContGen");
const expConts = document.querySelectorAll(".expCont");
const employersCards = document.querySelectorAll(".employersCard");


const skillsObserverOptions = {
    rootMargin: "0px 0px -60% 0px"
}
const skillsObserver = new IntersectionObserver(
    (entries, skillsObserver)=>{
        entries.forEach(entry =>{
        if (entry.isIntersecting){
            developCont.classList.add("developContAppear");
            writingCont.classList.add("writingContAppear");
            skillsObserver.unobserve(entry.target);
            }
        })}, skillsObserverOptions)

skillsObserver.observe(skillsSection);




const eduObserverOptions = {
    rootMargin: "0px 0px 0px 0px"
}
const eduObserver = new IntersectionObserver(
    (entries, eduObserver)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                brandsMotherCont.classList.add("brandsRevealer");
                eduObserver.unobserve(entry.target);
            }
        })}, eduObserverOptions)

eduObserver.observe(resumeEduSec);

brandsMotherCont.addEventListener("animationend", ()=>{
    brandsPics.forEach(brandpic =>{
            const aniDelay = brandpic.getAttribute("data-animation-delay");
            brandpic.style.animationDelay = `${aniDelay}ms`;
            brandpic.classList.add("brandsPicRevealer");
        }
    )})




const eduTitlesObserverOptions = {
    rootMargin: "0px 0px -75% 0px"
}
const eduTitlesObserver = new IntersectionObserver(
    (entries, eduObserver)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                EduTitleConts.forEach( eduTitle=>{
                    const aniDelay = eduTitle.getAttribute("data-animation-delay");
                    eduTitle.style.animationDelay = `${aniDelay}ms`;
                    eduTitle.classList.add("EduTitleContGenRevealer");
                })
                eduObserver.unobserve(entry.target);
            }
        })}, eduTitlesObserverOptions)

eduTitlesObserver.observe(resumeEduSec);





const expObserverOptions = {
    rootMargin: "0px 0px -50% 0px"
}
const expObserver = new IntersectionObserver(
    (entries, eduObserver)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                expConts.forEach(expCont=>{
                    const aniDelay = expCont.getAttribute("data-animation-delay");
                    expCont.style.animationDelay = `${aniDelay}ms`;
                    expCont.classList.add("expContRevealer");
                })
                eduObserver.unobserve(entry.target);
            }
        })}, expObserverOptions)

expObserver.observe(resumeExpSec);


const employersObserverOptions = {
    rootMargin: "0px 0px -60% 0px",
}
const employersObserver = new IntersectionObserver(
    (entries, eduObserver)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                employersCards.forEach(employerCard=>{
                    const aniDelay = employerCard.getAttribute("data-animation-delay");
                    employerCard.style.animationDelay = `${aniDelay}ms`;
                    employerCard.classList.add("employersRevealer");
                })
                eduObserver.unobserve(entry.target);
            }
        })}, employersObserverOptions)

employersObserver.observe(resumeExpSec);

console.log("yeah");