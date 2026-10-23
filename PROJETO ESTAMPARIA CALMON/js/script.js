// =======================================
// LOADER
// =======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

// =======================================
// NAVBAR
// =======================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// =======================================
// ANIMAÇÕES AO SCROLL
// =======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(
".service-card,.feature,.client,.gallery-grid img,.about-image,.about-text,.number"
).forEach(el => {

    observer.observe(el);

});

// =======================================
// BOTÃO VOLTAR AO TOPO
// =======================================

const topButton = document.createElement("div");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.classList.add("top-button");

document.body.appendChild(topButton);

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 600){

        topButton.classList.add("show-top");

    }else{

        topButton.classList.remove("show-top");

    }

});

// =======================================
// MENU MOBILE
// =======================================

const menuButton = document.querySelector(".menu-mobile");

const menu = document.querySelector(".navbar ul");

menuButton.addEventListener("click",()=>{

    menu.classList.toggle("active");

});

// =======================================
// FECHAR MENU AO CLICAR
// =======================================

document.querySelectorAll(".navbar ul li a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

// =======================================
// EFEITO PARALLAX HERO
// =======================================

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = window.scrollY * 0.45 + "px";

});

// =======================================
// EFEITO NOS CARDS
// =======================================

document.querySelectorAll(".service-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.transform =
        `
        perspective(900px)
        rotateY(${(x-rect.width/2)/18}deg)
        rotateX(${-(y-rect.height/2)/18}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// =======================================
// CONTADOR ANIMADO
// =======================================

const counters = document.querySelectorAll(".number h2");

const speed = 60;

counters.forEach(counter=>{

    const update = ()=>{

        const target = +counter.innerText.replace(/\D/g,'');

        let count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if(count < target){

            count += increment;

            counter.setAttribute("data-count",count);

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    }

    observer.observe(counter);

    counter.addEventListener("animationstart",update);

});

// =======================================
// GALERIA LIGHTBOX
// =======================================

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay = document.createElement("div");

        overlay.className="lightbox";

        overlay.innerHTML=`

            <span>&times;</span>

            <img src="${img.src}">

        `;

        document.body.appendChild(overlay);

        overlay.querySelector("span").onclick=()=>{

            overlay.remove();

        }

        overlay.onclick=(e)=>{

            if(e.target===overlay){

                overlay.remove();

            }

        }

    });

});
