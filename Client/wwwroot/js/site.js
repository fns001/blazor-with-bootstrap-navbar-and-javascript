// See https://developer.mozilla.org/en-US/docs/Web/Events/scroll

var lastScrollPosition = 0,
    tick = false;  // Track whether call is currently in process

function customFunction(scrollPos) {
    if (scrollPos > 10) {
        $('.navbar.fixed-top').addClass("navbar-sticky-scrolling");
    } else {
        $('.navbar.fixed-top').removeClass("navbar-sticky-scrolling");
    }
}

window.addEventListener('scroll', function (e) {
    lastScrollPosition = window.scrollY;
    if (!tick) {
        setTimeout(function () {
            customFunction(lastScrollPosition);
            tick = false;
        }, 50)
    }
    tick = true;
});