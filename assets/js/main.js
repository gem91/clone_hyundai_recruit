const gnb = document.querySelector(".gnb");
const gnb_sub = gnb.querySelector(".gnb_sub_wrap")

const body = document.getElementsByTagName("body")[0];

/* recruits Up & Down */
const recruitBox = document.querySelector(".notice_box.recruit")
const btnArrow = recruitBox.querySelector(".arrow_isDown");
const recruits = document.querySelector(".recruit_content");

recruitBox.addEventListener('click', (e) => {
    e.preventDefault();
    if(btnArrow.classList.contains("arrow_isDown")){
        btnArrow.classList.remove("arrow_isDown");
        btnArrow.classList.add("arrow_isUp");
        recruits.style.height = "0";
    }else{
        btnArrow.classList.remove("arrow_isUp");
        btnArrow.classList.add("arrow_isDown");
        reHeight();
    }
})

const reHeight = function(){
    let innerWidth = window.innerWidth;
    if(innerWidth < "758"){
        recruits.style.height = "1380px";
    }else if (innerWidth < "1024") {
        recruits.style.height = "1365px";
    } else {
        recruits.style.height = "740px";
    }
}


/* rolling notice */
const notice = document.querySelector(".notice ul")

document.addEventListener('DOMContentLoaded', ()=>{
    window.setInterval(rolling, 2500);
})

function rolling(){
    let prev = notice.querySelector(".prev");
    let current = notice.querySelector(".current");
    let next = notice.querySelector(".next");
   
    prev.classList.remove("prev");
    current.classList.remove("current");
    next.classList.remove("next");

    current.classList.add("prev");
    next.classList.add("current");
    if( next.nextElementSibling == null ){
        notice.querySelector("li:first-child").classList.add("next");
    }else{
        next.nextElementSibling.classList.add('next');
    }
};


/* sns heart press */
const heart = document.querySelectorAll(".fa-heart");

for( let i = 0; i < heart.length; i ++){
    heart[i].addEventListener('click', (e)=>{
        e.target.classList.toggle("on")
    })
}



/* jobs slides */
const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");

const jobs = document.querySelector(".jobs_area");
const jobList = jobs.querySelectorAll(".jobs_area li");

for( list of jobList ){
    list.addEventListener('click', e => {
        e.currentTarget.classList.add("on")
        e.currentTarget.previousElementSibling.classList.remove("on")
        e.currentTarget.nextElementSibling.classList.remove("on")
    })
}














