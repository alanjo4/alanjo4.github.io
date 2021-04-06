let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');

const contactButton = document.querySelector("#redes");
const socialBtn = document.querySelectorAll(".btn-social");

burger.addEventListener('click', function(){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

(function($) {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            let target = $(this.hash);
            target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
            if (target.length) {
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    2000,
                    'easeInOutExpo'
                );
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function() {
        burger.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });

    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 992px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    function WidthChange(mq) {
        if (mq.matches) {
            const contactButtonDesktop = document.querySelector("#redesDesktop");
            let observerDktp;
            observerDktp = new MutationObserver(function (e) {
                if (e[0].target.classList.contains('active')) {
                    socialBtn.forEach(element => element.classList.add('hover'));
                } else {
                    socialBtn.forEach(element => element.classList.remove('hover'));
                }
            });

            observerDktp.observe(contactButtonDesktop, {
                attributes: true,
                attributeFilter: ['class'],
                childList: false,
                characterData: false,
            });
            $('body').scrollspy({
                target: '#navbarResponsive',
                offset: 100,
            });
        } else {
            const observer = new MutationObserver(function(e) {
                if (e[0].target.classList.contains('active')) {
                    socialBtn.forEach(element => element.classList.add('hover'));
                } else {
                    socialBtn.forEach(element => element.classList.remove('hover'));
                }
            });

            observer.observe(contactButton, {
                attributes: true,
                attributeFilter: ['class'],
                childList: false,
                characterData: false,
            });
            $('body').scrollspy({
                target: '#main-nav',
                offset: 20,
            });
        }

    }

    const navbarCollapse = function() {
        if ($('#fakeNav').offset().top > 100) {
            $('#fakeNav').addClass('navbar-shrink');
        } else {
            $('#fakeNav').removeClass('navbar-shrink');
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery);



