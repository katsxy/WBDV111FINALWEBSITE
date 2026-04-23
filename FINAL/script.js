// REVIEW SLIDER
const track = document.querySelector('.reviews-track');
const groups = document.querySelectorAll('.review-group');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

// NEXT
nextBtn.addEventListener('click', () => {
    index++;
    if (index >= groups.length) index = 0;
    updateSlide();
});

// PREV
prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = groups.length - 1;
    updateSlide();
});

// AUTO SLIDE
let autoSlide = setInterval(() => {
    index++;
    if (index >= groups.length) index = 0;
    updateSlide();
}, 4000);

// PAUSE ON HOVER
document.querySelector('.review-wrapper').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.review-wrapper').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        index++;
        if (index >= groups.length) index = 0;
        updateSlide();
    }, 4000);
});

// SCROLL FADE ANIMATION
const faders = document.querySelectorAll('.section, .card, .review-card');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(el => {
    el.classList.add('fade');
    appearOnScroll.observe(el);
});