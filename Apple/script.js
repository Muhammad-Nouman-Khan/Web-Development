function imageSwiper() {
    const swiper = new Swiper('.swiper', {

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}

imageSwiper();

var search = document.querySelector("#search");
var searchMenu = document.querySelector("#search-menu");
var clicked = false;

search.addEventListener("click",function(){
    if(clicked == false){
        
        searchMenu.style.display = "flex";
        clicked = true;
    }
    else{
        searchMenu.style.display = "none";
        clicked = false;
    }
})