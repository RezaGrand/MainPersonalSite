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

const senderNameLabel = document.querySelector(".senderNameLabel");
const senderPhoneLabel = document.querySelector(".senderPhoneLabel");
const senderEmailLabel = document.querySelector(".senderEmailLabel");
const senderSubjectLabel = document.querySelector(".senderSubject");
const senderMessageLabel = document.querySelector(".senderMessageLabel");
const senderMessage = document.getElementById("senderMessage");
const senderSubject = document.getElementById("senderSubject");
const optionOne = document.querySelector(".optionOne");
const optionTwo = document.querySelector(".optionTwo");
const optionThree = document.querySelector(".optionThree");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const contactText = document.querySelector(".contactText");
const contactTextFirstP = document.querySelector(".contactTextFirstP");
const contactTextSecondP = document.querySelector(".contactTextSecondP");

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

        senderNameLabel.textContent = "Name:";
        senderNameLabel.classList.remove("labelGenFa");
        senderPhoneLabel.textContent = "Phone:";
        senderPhoneLabel.classList.remove("labelGenFa");
        senderEmailLabel.textContent = "Email:";
        senderEmailLabel.classList.remove("labelGenFa");
        senderSubjectLabel.textContent = "Subject:";
        senderSubjectLabel.classList.remove("labelGenFa");
        senderSubject.classList.remove("labelGenFa");
        senderMessageLabel.textContent = "Message:";
        senderMessageLabel.classList.remove("labelGenFa");
        senderMessage.setAttribute("placeholder", "Please write your message here");
        senderMessage.classList.remove("labelGenFa");
        optionOne.textContent = "Work and Projects";
        optionTwo.textContent = "Question or Suggestions";
        optionThree.textContent = "Other Subjects";
        resetBtn.setAttribute("value", "Clear All");
        submitBtn.setAttribute("value", "Send");
        resetBtn.classList.remove("labelGenFa");
        submitBtn.classList.remove("labelGenFa");
        contactText.classList.remove("contactTextFa");
        contactTextFirstP.textContent = "Hi there!";
        contactTextSecondP.textContent = "For all Business inquiries, Projects, Job Offers and Collaborations, You can use the form below. I'll respond asap.";
        contactTextFirstP.classList.remove("contactTextFirstPFa");
        contactTextSecondP.classList.remove("contactTextSecondPFa");

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

        senderNameLabel.textContent = "نام :";
        senderNameLabel.classList.add("labelGenFa");
        senderPhoneLabel.textContent = "تلفن :";
        senderPhoneLabel.classList.add("labelGenFa");
        senderEmailLabel.textContent = "ایمیل :";
        senderEmailLabel.classList.add("labelGenFa");
        senderSubjectLabel.textContent = "موضوع";
        senderSubjectLabel.classList.add("labelGenFa");
        senderSubject.classList.add("labelGenFa");
        senderMessageLabel.textContent = "پیام :";
        senderMessageLabel.classList.add("labelGenFa");
        senderMessage.setAttribute("placeholder", "لطفا پیامتان را اینجا بنویسید");
        senderMessage.classList.add("labelGenFa");
        optionOne.textContent = "همکاری و سفارش پروژه";
        optionTwo.textContent = "سوال، انتقاد و پیشنهاد";
        optionThree.textContent = "موضوعات دیگر";
        resetBtn.setAttribute("value", "حذف همه");
        submitBtn.setAttribute("value", "ارسال");
        resetBtn.classList.add("labelGenFa");
        submitBtn.classList.add("labelGenFa");
        contactTextFirstP.textContent = "!درود";
        contactTextSecondP.textContent = "شما عزیزان برای دعوت به همکاری، سفارش پروژه، ارسال پیشنهاد و انتقادات می توانید از فرم زیر استفاده کنید. در اولین فرصت به پیام شما پاسخ خواهم داد";
        contactText.classList.add("contactTextFa");
        contactTextFirstP.classList.add("contactTextFirstPFa");
        contactTextSecondP.classList.add("contactTextSecondPFa");
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


// -----------------------------      Form Handler       ----------------------------------------
let form = document.getElementById("mainForm");

async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("formStatus");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.style.backgroundColor = "#00D193";
        status.textContent = "Thanks for your submission!";
        if(status.classList.contains("formStatusRevealer")){
            status.classList.remove("formStatusRevealer");
            status.classList.add("formStatusRevealer");
        }
        status.classList.add("formStatusRevealer");
        form.reset();
    }).catch(error => {
        status.style.backgroundColor = "#EE5F4D";
        status.textContent = "Oops! There was a problem sending your message"
        if(status.classList.contains("formStatusRevealer")){
            status.classList.remove("formStatusRevealer");
            status.classList.add("formStatusRevealer");
        }
        status.classList.add("formStatusRevealer");
    });
}

form.addEventListener("submit", handleSubmit)