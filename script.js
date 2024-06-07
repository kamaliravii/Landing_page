mtop=document.querySelector('.top')

window.addEventListener('scroll',()=>{
    var y=window.scrollY;
    if(y<400){
        mtop.style.display='none';
    }
    else{
        mtop.style.display='block';
    }
})


let btnshow=document.querySelector(".btn-show");
let navbar=document.querySelector(".navbar");

btnshow.addEventListener("click" ,()=>{
    navbar.classList.toggle('show')
})