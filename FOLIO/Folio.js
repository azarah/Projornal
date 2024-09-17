let slideIndex = 0;
let timer;
let autoSlide = true;

showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "flex";  
    if (autoSlide) {
        timer = setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
}

function changeSlide(n) {
    clearTimeout(timer);
    slideIndex += n - 1;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    showSlides(slideIndex);
}

function toggleTimer() {
    autoSlide = !autoSlide;
    if (autoSlide) {
        showSlides(slideIndex);
    } else {
        clearTimeout(timer);
    }
}

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

        function checkAnswer() {
            var radios = document.getElementsByName('q1');
            var result = document.getElementById('result');
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    if (radios[i].value === "3") {
                        result.textContent = "Correct! The primary purpose of encryption is to prevent unauthorized access.";
                        result.style.color = "#1DB954";
                    } else {
                        result.textContent = "Incorrect. Try again.";
                        result.style.color = "#FF0000";
                    }
                    break;
                }
            }
        }