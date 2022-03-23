function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    
}

const faq = document.getElementsByClassName('box');
for (i=0; i < faq.length; i++){
    faq[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}