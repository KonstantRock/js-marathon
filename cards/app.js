const slides = document.querySelectorAll('.slide');

setClassRandomly('active', slides);

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}

function setClassRandomly (str, arr) {
    arr[Math.floor(Math.random() * arr.length)]
    .classList
    .add(str)
}