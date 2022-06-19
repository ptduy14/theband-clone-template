var searchBox = document.querySelector(".header__search");
var searchBtn = document.querySelector(".searchbox--btn");
var btnScrollTop = document.querySelector(".scroll");
var header = document.querySelector(".header");
// xử lí đóng mở menu
searchBtn.addEventListener('click', function () {
    searchBox.classList.toggle("active");
});


// event click button scroll top
btnScrollTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

// slider
var slider = document.querySelector(".slider");
var i = 1;
var slideShow = function(){
    var slideImg = ["slider--one", "slider--two", "slider--three"];
    if (i == 0) {
        slider.classList.remove(slideImg[i+2]);
        slider.classList.add(slideImg[i]);
    } else {
        slider.classList.remove(slideImg[i-1]);
        slider.classList.add(slideImg[i]);
    }
    if (i == 2) {
        i = 0;
    } else {
        i++;
    }
};

setInterval(slideShow, 3000);

// meunu
var lastScroll = 0;
window.addEventListener("scroll", function(){
    var newScroll = this.window.pageYOffset;
    if (newScroll > lastScroll) {
        //scoll đang đi xuống 
        if (newScroll > 50){
            header.classList.add("active");
            btnScrollTop.classList.add("active");
        }
    } else {
        //scroll đi lên
        header.classList.remove("active");
        if (newScroll < 50) {
            btnScrollTop.classList.remove("active");
        }
    }
    lastScroll = newScroll;
});

// modal ticket
const buyBtns = document.querySelectorAll('.js-btn-buy');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal__container');
const closeBtn = document.querySelector('.js-close--modal');
const payBtn= document.querySelector('.js-btn-pay');
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function(){
        modal.classList.add('active');
    });
}

closeBtn.addEventListener('click', function(){
    modal.classList.remove('active');
});

payBtn.addEventListener('click', function(){
    modal.classList.remove('active');
});

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
});
modal.addEventListener('click', function(){
    modal.classList.remove('active');
});

// moble js

// đóng mở menu
const moblieICon = document.querySelector(".js-moblie-icon");
const mobleIconBlock = document.querySelector(".js-header__moblie--icon");
moblieICon.addEventListener('click', function(){
    header.classList.toggle("active-moblie");
});

// tự động đóng menu
var menuItems = document.querySelectorAll('.header__menu ul li a[href*="#"]');
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', function(event){
        var isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('header__menu--submenu');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.classList.remove("active-moblie");
        }
    });
}
