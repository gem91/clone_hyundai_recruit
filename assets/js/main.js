const gnb = document.querySelector(".gnb");
const gnb_sub = gnb.querySelector(".gnb_sub_wrap")

// gnb.addEventListener("mouseover", e => {
//     console.log('clicked');
//     gnb_sub.style.display = "block"
// })
// gnb_sub.addEventListener("mouseover", e => {
//     gnb_sub.style.display = "none"
// })



/* recruits */
const btnArrow = document.querySelector(".arrow_isDown");
const BtnPlus = document.querySelector(".icon_plus");
btnArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if(btnArrow.classList.contains("arrow_isDown")){
        btnArrow.classList.remove("arrow_isDown");
        btnArrow.classList.add("arrow_isUp");
    }else{
        btnArrow.classList.remove("arrow_isUp");
        btnArrow.classList.add("arrow_isDown");
    }
})

