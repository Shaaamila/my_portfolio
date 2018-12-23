<<<<<<< HEAD
console.log('bulbuli');
$.localScroll();
=======
// smooth scroll from nav to element

console.log('bulbuli');
$.localScroll();



// for scroll to top button
 $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.goToTop').fadeIn();
        } else {
            $('.goToTop').fadeOut();
        }
    });
    $('.goToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
>>>>>>> b2943564243168e09182c9c33f4c83287ef975c7
