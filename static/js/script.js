
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active')
            }else{
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect =el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}


let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(){
    showSlides(slideIndex += 1);
}

function previousSlide(){
    showSlides(slideIndex -= 1);
}

function showSlides(n){
    let slides = document.getElementsByClassName("item");

    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }

    for (let slide of slides){
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block"
}