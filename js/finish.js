
        


$(function () {


    let sectionTop = $('.section01').offset().top;
    let section2 = $('.section02').offset().top;
    let section3 = $('.section03').offset().top;
    let section4 = $('.section04').offset().top;
    $(window).scroll(function () {
        let nowScroll = $(window).scrollTop();
        if (nowScroll > sectionTop) {

            $('.sidemenu li').removeClass('active');
            $('.sidemenu li').eq(0).addClass('active');
        }

        if (nowScroll > section2 - 200) {

            $('.sidemenu li').removeClass('active');
            $('.sidemenu li').eq(1).addClass('active');
        }

        if (nowScroll > section3 + 600) {

            $('.sidemenu li').removeClass('active');
            $('.sidemenu li').eq(2).addClass('active');
        }
        if (nowScroll > section4 + 500) {
            $('.sidemenu li').removeClass('active');
            $('.sidemenu li').eq(3).addClass('active');
        }


    })


    $('.sidemenu li span').click(function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset.top }, 300);
    });


    const subTabNav = $(".sub_tab_nav a");
    const tabNav = $(".tab_nav a");
    const tabNavLi = $('.tab_nav li');


    subTabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");


        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");
    });


    tabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");


        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");


        const subTabActive = $(target).find('.sub_tab_nav li.active');
        if (!subTabActive.length) {
            $(target).find('.sub_tab_nav li:first-child a').trigger('click');
        } else {
            subTabActive.find('a').trigger('click');
        }
    });


    const mainTabActive = tabNavLi.filter('.active');
    if (!mainTabActive.length) {
        tabNavLi.first().find('a').trigger('click');
    } else {
        mainTabActive.find('a').trigger('click');
    }


    let section03 = document.querySelector('.section03');
    let menu3 = section03.querySelectorAll('.menu li');
    let itemWrap3 = section03.querySelectorAll('.item_wrap');
    for (let i = 0; i < menu3.length; i++) {
        menu3[i].addEventListener('click', () => {
            menu3.forEach(index => {
                index.classList.remove('on');
            });
            menu3[i].classList.add('on');
            itemWrap3.forEach(index => {
                index.classList.remove('on');
            });
            itemWrap3[i].classList.add('on');
        });
    }



    var modals = document.getElementsByClassName("modal");
    var btns = document.getElementsByClassName("secitem");
    var spanes = document.getElementsByClassName("close");
    var funcs = [];

    function Modal(num) {
        return function () {

            btns[num].onclick = function () {
                modals[num].style.display = "block";
                console.log(num);
            };


            spanes[num].onclick = function () {
                modals[num].style.display = "none";
            };
        };
    }


    for (var i = 0; i < btns.length; i++) {
        funcs[i] = Modal(i);
    }


    for (var j = 0; j < btns.length; j++) {
        funcs[j]();
    }


    window.onclick = function (event) {
        if (event.target.className == "modal") {
            event.target.style.display = "none";
        }
    };
});