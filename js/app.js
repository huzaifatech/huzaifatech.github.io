$(document).ready(function () {
    $('#profile__ripples').ripples({
        resolution: 516,
        dropRadius: 7
    });
    const bars = document.querySelectorAll('.progress_bar')

    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })

    // cunter
    const counters = document.querySelectorAll('.counter')
    function runcounter() {
        counters.forEach(counter => {

            counter.innerText = 0;
            var target = +counter.dataset.count;

            let step = target / 10000
            var countit = function (params) {
                let displayedcount = +counter.innerText
                if (displayedcount < target) {
                    counter.innerText = Math.ceil(displayedcount + step)
                    setTimeout(countit, 1)
                } else {
                    counter.innerText = target;

                }
            }
            countit()
        })
    }
    runcounter();


    let countersection = document.querySelector('.counter_section')

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0
    let sectionobserver = new IntersectionObserver(function (entries) {

        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runcounter()
        }
    }, options)
    sectionobserver.observe(countersection)


    var $wrapper = $('.portfolio_wrapper')
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    })
    let links = document.querySelectorAll('.tabs a')
    links.forEach(link => {
        let selector = link.dataset.filter


        link.addEventListener('click', function (e) {
            e.preventDefault()

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            })
            links.forEach(link => {
                link.classList.remove('active')
            })
            e.target.classList.add('active')
        })
    })
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    });

    $('.slider').slick({
        arrows: false,
        autoplay: true
    });
});