function loco() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
loco();

function swp2() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grapcursor: true
    });
}

function spw1() {
    const swiperEl = document.querySelector('swiper-container');
    const swiper1 = swiperEl.swiper;

    var appendNumber = 4;
    var prependNumber = 1;
    
    document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
        e.preventDefault();
        swiper1.prependSlide([
            '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
            '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
        ]);
    });
    document.querySelector(".prepend-slide").addEventListener("click", function (e) {
        e.preventDefault();
        swiper1.prependSlide(
            '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
        );
    });
    document.querySelector(".append-slide").addEventListener("click", function (e) {
        e.preventDefault();
        swiper1.appendSlide(
            '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
        );
    });
    document.querySelector(".append-2-slides").addEventListener("click", function (e) {
        e.preventDefault();
        swiper1.appendSlide([
            '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
            '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
        ]);
    });
    
}

function nav() {
    let menu = document.querySelector("#menu-line")
    let nav = document.querySelector("#nav-popup")
    let l1 = document.querySelector("#menu-line .line1")
    let l2 = document.querySelector("#menu-line .line2")
    let l3 = document.querySelector("#menu-line .line3")
    let flag = 0

    menu.addEventListener('click', function () {
        if (flag === 0) {
            l1.style.transform = 'translateY(7px) rotate(45deg)'
            l3.style.transform = 'translateY(-7px) rotate(-45deg)'
            l2.style.opacity = '0'
            nav.style.top = '0%'
            flag = 1
        } else {
            l1.style.transform = 'translateY(0px) rotate(0deg)'
            l3.style.transform = 'translateY(0px) rotate(0deg)'
            l2.style.opacity = '1'
            nav.style.top = '-50vh'
            flag = 0
        }
    })
}


document.addEventListener('DOMContentLoaded', function() {
    var tl = new TimelineMax();

    var iconWrap = document.querySelectorAll('.icon-wrap')[0];
    var input = document.querySelector('input');
    var labelWrap = document.querySelector('.label-wrap');
    // var svg = document.querySelector('svg');

    iconWrap.addEventListener('click', function() {
        if(iconWrap.classList.contains('open')) {
            iconWrap.classList.remove('open');
            tl.to('.icon-wrap', 0.3, {width: '70px', boxShadow: '0px 6px 6px rgba(0,0,0,.28)'})
            tl.to('.icon-wrap', 0.3, {borderRadius: "50%"}, '-=0.2')
            // TweenMax.to('svg', 0.3, {fill: '#000', rotation: 0})
            TweenMax.to('input, label', 0.3, {width: 0})
        } else {
            iconWrap.classList.add('open');
            tl.to('.icon-wrap', 0.7, {borderRadius: "20px", width: '400px', boxShadow: 'rgba(0, 0, 0, 0.28) -3px 16px 52px 0px', ease: Elastic.easeOut.config(1, 0.7)})
            // TweenMax.to('svg', 0.3, {fill: '#737272', rotation: '90deg'})
            TweenMax.to('input', 0.3, {width: '81%'})
            TweenMax.to('label', 0.3, {width: '78%'})
        }
    });

    input.addEventListener('focus', function() {
        labelWrap.style.opacity = '0';
    });

    input.addEventListener('blur', function() {
        if(input.value !== '') {
            labelWrap.style.opacity = '0';
        } else {
            labelWrap.style.opacity = '1';
        }
    });
});


nav();
swp2()
swp1()








