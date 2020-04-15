(function ($) {

    // top 버튼 스크롤 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn(200);
        } else {
            $('#backToTop').fadeOut('normal');
        }
    });
    $('#backToTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 200);
    });


    //배너 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });

    //무비차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        //            mousewheel: {
        //                invert: true,
        //            },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

    //무비차트 탭메뉴
    var movBtn = $(".movie_title > ul > li");
    var movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show();

    movBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display", "none");
        movCont.eq(index).css("display", "block");
    });

    //공지사항 탭 메뉴
    var tabMenu = $(".notice");

    //컨텐츠 내용을 숨겨주세요
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e) {
        e.preventDefault();
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);

    // sns 공유
    $(".icon.s2").click(function (e) {
        e.preventDefault();
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
    });
    $(".icon.s1").click(function (e) {
        e.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' + encodeURIComponent(document.URL) + '%20-%20' + encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
    });


})(jQuery);
