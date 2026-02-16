/* MUSIC */
let started=false;
document.body.addEventListener("click",()=>{
if(!started){
let audio=document.getElementById("bgm");
audio.volume=0;
audio.play();
let fade=setInterval(()=>{
if(audio.volume<1){
audio.volume+=0.05;
}else clearInterval(fade);
},200);
started=true;
}
});

/* SLIDER */
const slides=document.querySelectorAll(".slide");
let current=0;

function nextSlide(){
if(current < slides.length-1){
slides[current].classList.remove("active");
current++;
slides[current].classList.add("active");

setTimeout(typeWriter,200);
}
}

let currentSlide = 0;

function showSlide(index){
const slides = document.querySelectorAll(".slide");
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}


/* TYPEWRITER */
function typeWriter(){
const activeSlide=slides[current];
const textEl=activeSlide.querySelector(".type-text");
if(!textEl) return;
const text=textEl.textContent;
textEl.textContent="";
let i=0;
let interval=setInterval(()=>{
textEl.textContent+=text[i];
i++;
if(i>=text.length) clearInterval(interval);
},40);
}
typeWriter();

/* LETTER */

function openLetter(el){
    el.classList.toggle("open");
}


/* REALISTIC PETALS */
function createPetal(){
const petal = document.createElement("div");
petal.classList.add("petal");

petal.style.left = Math.random()*window.innerWidth+"px";
petal.style.animationDuration = 6+Math.random()*4+"s";

document.querySelector(".petals").appendChild(petal);

setTimeout(()=>petal.remove(),10000);
}

setInterval(createPetal,300);

function burstPetals(){
for(let i=0;i<60;i++){
createPetal();
}
}


// ===== PROPOSAL LOGIC =====
document.addEventListener("DOMContentLoaded", function(){

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

if(noBtn){

noBtn.addEventListener("mouseenter", function(){

const padding = 20;

const maxX = window.innerWidth - noBtn.offsetWidth - padding;
const maxY = window.innerHeight - noBtn.offsetHeight - padding;

const newX = Math.random() * maxX;
const newY = Math.random() * maxY;

noBtn.style.position = "fixed";
noBtn.style.left = newX + "px";
noBtn.style.top = newY + "px";

});

}

if(yesBtn){
yesBtn.addEventListener("click", function(){
burstPetals();
popup.classList.add("active");
});
}

});

// ===== Fungsi Letter =====
function goToLetter(){

const popup = document.getElementById("popup");
if(popup){
popup.classList.remove("active");
}

slides[current].classList.remove("active");

current = slides.length - 1;

slides[current].classList.add("active");

}
