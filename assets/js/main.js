
// function hoverAnimation() {
//     const gnb = document.querySelector(".gnb");
//     gnb.addEventListener('mouseover', (e)=>{
//         console.log('on');
//     }) 
// }
// hoverAnimation();
// const gnbList = document.querySelectorAll(".gnb > li");
// let arr = new Array();

// gnbList[0].addEventListener("mouseover", (e) => {
//    const len = gnbList.length;
//    arr = gnbList
//    if (e.traget === arr[len] == undefined) {
            
//        console.log('clciked');
//             }
// });





/* number of recruits employee variation */
const counters = document.querySelectorAll('.value');
const arr = [...counters]
const speed = 200;

num = arr.map( counter => {
    return +counter.getAttribute('data-counter');
})
arr[0].setAttribute( 'data-counter', num[1] + num[2] + num[3] + num[4] );

counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-counter');
        const data = +counter.innerText;
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        }else{
            counter.innerText = value;
        }
    }
   animate();
});


/* recruits Up & Down */
const body = document.getElementsByTagName("body")[0];
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
const jobPrev = document.querySelector(".arrow_left");
const jobNext = document.querySelector(".arrow_right");

const jobs = document.querySelector(".jobs_area");
const jobList = jobs.querySelectorAll("li");
const len = jobList.length; //6 
let active = 0;


jobPrev.addEventListener('click', (e) => {
    ( active === 0 ) ? active = len-1 :  active -- ;
       

    

    for( let list of jobList){
        list.classList.remove("on");
        jobs.style.left = ( -100 * active + 200  ) + "px"
        console.log(jobs.style.left = ( -200 * active ) + "px");
    }
    jobList[active].classList.add("on");
});

jobNext.addEventListener('click', (e) => {
    (active === len-1) ? active = 0 :  active ++;
    
    for( let list of jobList)  list.classList.remove("on");

    jobs.style.left = (active * -200) + "px"
    jobList[active].classList.add("on");
});















