import Animate from "./animation.mjs";

window.addEventListener('load', () => {
    // s: class Slider
    class Slider{
        constructor(subject){
            this.subject = document.querySelector(subject);
            this.ul = this.subject.querySelector("ul");
            this.ul.prepend(this.ul.lastElementChild);
            this.btn = this.subject.querySelectorAll("button");
            this.enableClick = true;
       
            this.btn[0].addEventListener('click', e => {
                e.preventDefault();
                if(this.enableClick){
                    this.enableClick = false;
                    this.prevSlide()
                }
            });
            this.btn[1].addEventListener('click', e => {
                e.preventDefault();
                if(this.enableClick){
                    this.enableClick = false;
                    this.nextSlide()
                }
            });
        } // constructor
        // 다음 버튼
        nextSlide(){
            if(this.ul.getAttribute("style").indexOf("px") > 0){
                new Animate(this.ul, {
                    prop: "left",
                    value: -350,
                    duration: 300,
                    callback: () => {
                        setTimeout(() =>{
                            this.ul.append(this.ul.firstElementChild);
                            this.ul.firstElementChild.classList.remove("on");
                            this.ul.children[1].classList.add("on")
                            this.ul.style.left = -150 + "px";
                        }, 100)
                        this.enableClick = true;
                    }
                });
            }else{
                new Animate(this.ul, {
                    prop: "left",
                    value: -200 + "%",
                    duration: 500,
                    callback: () => {
                        this.ul.append(this.ul.firstElementChild);
                        this.ul.firstElementChild.classList.remove("on");
                        this.ul.children[1].classList.add("on")
                        this.ul.style.left = -100 + "%";
                        this.enableClick = true;
                    }
                });
            };
        };
        //이전버튼
        prevSlide(){
            if(this.ul.getAttribute("style").indexOf("px") > 0){
                new Animate(this.ul, {
                    prop: "left",
                    value: 0,
                    duration: 300,
                    callback: () => {
                        setTimeout(() =>{
                            this.ul.children[1].classList.remove("on")
                            this.ul.prepend(this.ul.lastElementChild);
                            this.ul.children[1].classList.add("on");
                            this.ul.style.left = -150 + "px";
                        }, 100)
                        this.enableClick = true;
                    }
                });
            }else{
                new Animate(this.ul, {
                    prop: "left",
                    value: 0 + "%",
                    duration: 500,
                    callback: () => {
                        this.ul.children[1].classList.remove("on")
                        this.ul.prepend(this.ul.lastElementChild);
                        this.ul.style.left = -100 + "%";
                        this.ul.children[1].classList.add("on");
                        this.enableClick = true;
                    }
                });
            };
        };
    };  // e: class Slider

    // s: 확장 class
    class ChageFullSilider extends Slider{
        constructor(subject, innerW){
            super(subject);
            this.innerW = window.innerWidth;
            if(this.innerW < "758"){
                this.ul.setAttribute("style", "left: -100%");
            }
        };
    };  //e: 확장 class ChangeFullSlider

    new Slider(".visual_cont");
    new ChageFullSilider(".jobs_container")
   
 
    /* scroll effect */
    window.addEventListener('scroll', e => {
        if ( Math.floor(window.scrollY) > 240 ){
            /* number of recruits employee variation */
            const counters = document.querySelectorAll('.value');
            const arr = [...counters]
            const speed = 200;

            let num = arr.map( counter => {
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
                        setTimeout(animate, 30);
                    }else{
                        counter.innerText = value;
                    }
                }
            animate();
            });
        }
    })


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

    function reHeight(){
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

});




