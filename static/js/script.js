
// ANIMATIONS

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


// SLIDERS

var slideIndex = 0;

const cars = Array('car-3-1.png', 'car-3-2.jpg', 'car-3-3.jpg')

function nextSlide(){
    showSlides(slideIndex += 1, 'right');
}

function previousSlide(){
    showSlides(slideIndex -= 1, 'left');
}

function showSlides(n, turn){
    l_button = document.getElementById('previous')
    r_button = document.getElementById('next')

    l_button.disabled = true
    r_button.disabled = true


    first = document.getElementById('first')
    second = document.getElementById('second')
    
    if (n > cars.length - 1){
        slideIndex = 0
    }
    if (n < 0){
        slideIndex = cars.length - 1
    }

    if (turn == 'right'){
        second.style.backgroundImage = `url("../static/images/${cars[slideIndex]}")`
        second.classList.add('item-animated')
        second.classList.remove('item')

        
        function slidePrev() {
            first.style.backgroundImage = second.style.backgroundImage
            second.classList.add('item')
            second.classList.remove('item-animated')
    }
    }
    else{
        second.style.backgroundImage = `url("../static/images/${cars[slideIndex]}")`
        second.classList.add('item-animated-l')
        second.classList.remove('item')

        
        function slidePrev() {
            first.style.backgroundImage = second.style.backgroundImage
            second.classList.add('item')
            second.classList.remove('item-animated-l')
        }
    }

    setTimeout(() => {
        slidePrev();
        l_button.disabled = false;
        r_button.disabled = false;
    }, 2100)

}



var slideIndex2 = 0;

const cars2 = Array('car-5-1.png', 'car-5-2.jpg', 'car-5-3.jpg')

function nextSlide2(){
    showSlides2(slideIndex2 += 1, 'right');
}

function previousSlide2(){
    showSlides2(slideIndex2 -= 1, 'left');
}

function showSlides2(n, turn){
    l_button = document.getElementById('previous2')
    r_button = document.getElementById('next2')

    l_button.disabled = true
    r_button.disabled = true


    first = document.getElementById('first2')
    second = document.getElementById('second2')
    
    if (n > cars2.length - 1){
        slideIndex2 = 0
    }
    if (n < 0){
        slideIndex2 = cars2.length - 1
    }

    if (turn == 'right'){
        second.style.backgroundImage = `url("../static/images/${cars2[slideIndex2]}")`
        second.classList.add('item-animated')
        second.classList.remove('item2')

        
        function slidePrev() {
            first.style.backgroundImage = second.style.backgroundImage
            second.classList.add('item2')
            second.classList.remove('item-animated')
    }
    }
    else{   
        second.style.backgroundImage = `url("../static/images/${cars2[slideIndex2]}")`
        second.classList.add('item-animated-l')
        second.classList.remove('item2')

        
        function slidePrev() {
            first.style.backgroundImage = second.style.backgroundImage
            second.classList.add('item2')
            second.classList.remove('item-animated-l')
        }
    }

    setTimeout(() => {
        slidePrev();
        l_button.disabled = false;
        r_button.disabled = false;
    }, 2100)

}

// NAVBAR DARKNESS ON THE MAIN PAGE

if (document.title == 'ZAVL'){
    navbar = document.getElementById('navbar')
    navbar.classList.add('darkness')
}

// SERVICES IMAGES

function proportionImages(){
    images = document.getElementsByClassName('serv-img');
        size = '70%';

    for (let image of images){
        image.style.width = size
        pixels = image.clientWidth + 'px'
        image.style.height = pixels
    }
}

function imagesServ(){
    images = document.getElementsByClassName('serv-img')
    for (let image of images){
        id = image.id
        image.setAttribute('style', `background-image: url("${id}")`)
    }

}


window.addEventListener('resize', function(event) {
    proportionImages()
}, true);


imagesServ()
proportionImages()


if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

function navbarRight() {
    button = document.getElementById('button-nav')
    if ('active-but' == button.classList[1]) {
        button.classList.remove('active-but')
        button.classList.add('disabled-but')

        navbar = document.getElementsByClassName('navbar-mobile')
        nav = document.getElementById('navbar-main-mobile')
        nav.classList.remove('_anim-left')
        nav.classList.remove('_active')
        nav.classList.add('_anim-mobile-del')
        nav.classList.add('_active')
    } else {
        button.classList.remove('disabled-but')
        button.classList.add('active-but')
        navbar = document.getElementsByClassName('navbar-mobile')
        for (let item of navbar) {
            item.style.display = "block";
        }
        nav = document.getElementById('navbar-main-mobile')
        nav.classList.remove('_anim-mobile-del')
        nav.classList.remove('_active')
        nav.classList.add('_anim-left')
        nav.classList.add('_active')
    }
}
