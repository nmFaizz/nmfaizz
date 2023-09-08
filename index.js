const slideMenu = document.querySelector(".list-nav");
const navToggle = document.querySelector(".menu-toggle input");
const filter = document.querySelector(".sect1");
const checkBox = document.getElementById("cb");

function menuToggle() {
    slideMenu.classList.toggle("row");
    filter.classList.toggle("adjust");
    if (checkBox.checked) {
        document.body.classList.add("remove-scrolling");
    } else {
        document.body.classList.remove("remove-scrolling");
    }
}

function navOnclick() {
    if (checkBox.checked == true) {
        checkBox.checked = false;
        document.body.classList.remove("remove-scrolling");
    }
    filter.classList.remove("adjust");
    slideMenu.classList.remove("row");
}

var typed = new Typed('.typed-abt', {
    strings: [
        'Photographers',
        'Front-End Dev',
        'CS Student'
    ],
    loop: true,
    typeSpeed: 20,
    backSpeed: 20
});

window.onscroll = function() {navScroll()};
const navbarNav = document.getElementById("nav");

function navScroll() {
    if(document.documentElement.scrollTop > 60) {
        navbarNav.className = "bg-nav";
    } else {
        navbarNav.className = "";
    }
}

let projDiv = document.getElementById("cont-proj")
let headerProj = document.getElementById("header-c1")
let cardImage = document.getElementById("proj-img")
let cardIndex = 0;

let textBroArr = [
    ["Malang - Jawa Timur", "ISO 800", "Aperture f1.8", "ShutterSpeed 1/80"], 
    ["Mekkah - Saudi Arabia", "ISO 100", "Aperture f2.2", "ShutterSpeed 1/1250"],
    ["Mekkah - Saudi Arabia", "ISO 100", "Aperture f1.8", "ShutterSpeed 1/3200"]
]

let headerArr = [
    "SINGHASARI RESORT",
    "THAIF",
    "TAIFSAMA"
]

let imageArr = [
    "pic/malang.jpg",
    "pic/taifpunc.jpg",
    "pic/taifhighway.jpg"
]

function swiperCard(params) {

    if (params == "right") {
        cardIndex++
        if (cardIndex > 2) {
            cardIndex = 0
        }
    } 
    if (params == "left") {
        cardIndex--
        if (cardIndex < 0)  {
            cardIndex = 2
        }
    }

    for (let i = 0; i < 4; i++) {
        let card = projDiv.getElementsByTagName("p")[i]
        if (i == 0) {
            card.innerText = textBroArr[cardIndex][0]
        } else if (i == 1) {
            card.innerText = textBroArr[cardIndex][1]
        } else if (i == 2) {
            card.innerText = textBroArr[cardIndex][2]
        } else if (i == 3) {
            card.innerText = textBroArr[cardIndex][3]
        }
    }
    
    headerProj.innerText = headerArr[cardIndex]
    cardImage.style.backgroundImage = `url(${imageArr[cardIndex]})`
    
}

const port1 = document.querySelectorAll(".portImg")
const textCard = document.querySelectorAll(".text")

function textAppear(portNum) {
    textCard[portNum].style.transform = "translateY(-100%)"
    port1[portNum].style.filter = "blur(1.3px)"
}

function textFade(portNumFade) {
    textCard[portNumFade].style.transform = "translateY(0)"
    port1[portNumFade].style.filter = "blur(0)"
}