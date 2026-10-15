let projectSlideIndex = 1;
let certificateSlideIndex = 1;
showDivs(projectSlideIndex);
showDivs2(certificateSlideIndex);

function plusDivs(n) {
    showDivs(projectSlideIndex += n);
}

function showDivs(n) {
    const slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {projectSlideIndex = 1; }
    if (n < 1) {projectSlideIndex = slides.length}

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[projectSlideIndex - 1].style.display = "grid";
}

function plusDivs2(n) {
    showDivs2(certificateSlideIndex += n);
}

function showDivs2(n) {
    const slides = document.querySelectorAll(".mySlides2");

    if (n > slides.length) {certificateSlideIndex = 1; }
    if (n < 1) {certificateSlideIndex = slides.length}

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[certificateSlideIndex - 1].style.display = "grid";
}