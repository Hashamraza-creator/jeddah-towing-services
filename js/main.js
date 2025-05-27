(function ($) {
    "use strict";

    // Initiate the wowjs animation library
    new WOW().init();

    // Insert mobile menu **inside** the header (not after)
    $('#header').append('<div class="mobile-menu d-xl-none"></div>');
    $('.top-menu').clone().appendTo('.mobile-menu');

    // Toggle mobile menu on hamburger click
    $('.mobile-menu-btn').click(function () {
        $('.mobile-menu').stop().slideToggle();
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-left');
              observer.unobserve(entry.target); // Animate only once
            }
          });
        });
    
        const target = document.querySelector('#welcome');
        if (target) observer.observe(target);
      });



      //amenties animation


      document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("hidden-left")) {
                        entry.target.classList.add("animate-left");
                    }
                    if (entry.target.classList.contains("hidden-right")) {
                        entry.target.classList.add("animate-right");
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll(".hidden-left, .hidden-right").forEach(el => {
            observer.observe(el);
        });
    });


    // services
    document.addEventListener("DOMContentLoaded", function () {
        if (window.innerWidth <= 768) return;
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target.classList.contains("hidden-left")) {
                entry.target.classList.add("animate-left");
              }
              if (entry.target.classList.contains("hidden-fade")) {
                entry.target.classList.add("animate-fade");
              }
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
    
        document.querySelectorAll(".hidden-left, .hidden-fade").forEach(el => {
          observer.observe(el);
        });
      });


      // mobile-bottom bar 



      let lastScroll = 0;
  const bar = document.getElementById('bottomBar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // scrolling down
      bar.style.transform = 'translateY(0)';
    } else {
      // scrolling up
      bar.style.transform = 'translateY(100%)';
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });

    // Sticky header toggle
    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // The rest of your code unchanged...

})(jQuery);
