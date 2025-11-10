const dot = document.querySelector("[data-cursor]");
const outline = document.querySelector("[data-outline]");
const icon = document.getElementsByTagName("i");

window.addEventListener("mousemove", function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;


    outline.animate({
        left : `${posX}px`,
        top : `${posY}px`
    }, {duration: 500, fill:"forwards"});

const elementsUnderCursor = document.elementsFromPoint(posX, posY);
const hoveredElement = elementsUnderCursor.find(el =>
    el.matches('p, h1, button,a, span')
);

if (hoveredElement) {
    dot.classList.add('hovered');
    outline.classList.add('hovered');
} else {
    dot.classList.remove('hovered');
    outline.classList.remove('hovered');
}

const hoveredbtn = elementsUnderCursor.find(el =>
    el.matches('span')
);
document.querySelectorAll('span.hovered-btn').forEach(btn => {
    btn.classList.remove('hovered-btn'); 
});

if (hoveredbtn) {
    hoveredbtn.classList.add('hovered-btn');
    outline.classList.add('hovered-2');
}else{
    outline.classList.remove('hovered-2');
}



});


const about = document.getElementById("about");
const work = document.getElementById("work");
const skill = document.getElementById("skill");
const contact = document.getElementById("contact");
const qbutton = document.getElementById("qbutton");
about.addEventListener("click", () => {
    setTimeout(() => {
        $('#add').load('about.html')
      }, 500);

});

work.addEventListener("click", () => {
    setTimeout(() => {
        $('#add').load('work.html')
      }, 500);

  });
skill.addEventListener("click", () => {
    setTimeout(() => {
        $('#add').load('skills.html')
      }, 500);

  });

contact.addEventListener("click", () => {
    setTimeout(() => {
        $('#add').load('contact.html')
      }, 500);

});
qbutton.addEventListener("click", () => {
    setTimeout(() => {
        $('#add').load('main.html')
      }, 500);

});

$(document).ready(function() {
  $('#add').load('main.html');
});

const mainsec = document.querySelector(".mainsec");

function fade(){

    if (document.querySelector('.text')) {
        document.querySelector('.text').style.opacity = "0";
      }
    if(document.querySelector("h1")){
        document.querySelector("h1").style.opacity = "0";
    }
    if(document.querySelector(".about")){
        document.querySelector(".about").style.opacity = "0";
    }
    if(document.querySelector(".skills")){
        document.querySelector(".skills").style.opacity = "0";
    }

    if(document.querySelector(".work")){
        document.querySelector(".work").style.opacity = "0";
    }
    if(document.querySelector(".contact")){
        document.querySelector(".contact").style.opacity = "0";
    }
    }

