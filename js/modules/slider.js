function slider({container, slide, next, prev, totalCounter, currentCounter, wrapper, field}) {
    // Slider
    const slideWrapper = document.querySelector(wrapper),
          slider = document.querySelector(container),
          slides = document.querySelectorAll(slide),
          total = document.querySelector(totalCounter),
          prevArrow = document.querySelector(prev),
          nextArrow = document.querySelector(next),
          current = document.querySelector(currentCounter),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slideWrapper).width;
    let currentSlide = 1,
        offset = 0;

    function dotActive() {
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[currentSlide - 1].style.opacity = '1';
    }

    function currentNum() {
        if(currentSlide < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }
    }

    function transformToNum(string) {
       return +string.match(/\d/g).join('');
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all 0.7s';

    slideWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          dotsArr = [];
    dots.classList.add('carousel-indicators');
    slider.append(dots);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);

        dotsArr.push(dot);

        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            currentSlide = slideTo;
            offset = transformToNum(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dotActive();
            
            currentNum();
            

        });
    }

    if(slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${currentSlide}`;
        } else {
            total.textContent = slides.length;
        }

    nextArrow.addEventListener('click', () => {
        if(offset == transformToNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += transformToNum(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(currentSlide == slides.length) {
            currentSlide = 1;
        } else {
            currentSlide++;
        }

        currentNum();

        dotActive();
    });

    prevArrow.addEventListener('click', () => {
        if( offset == 0) {      
            offset = transformToNum(width) * (slides.length - 1);
        } else {
            offset -= transformToNum(width);
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(currentSlide == 1) {
            currentSlide = slides.length;
        } else {
            currentSlide--;
        }

        currentNum();

        dotActive();
    }); 

    // function showSlide(n) {
    //     if(n > 4) {
    //         currentSlide = 1;
    //     }

    //     if(n < 1) {
    //         currentSlide = slides.length;
    //     }

    //     slides.forEach(slide => {
    //         slide.classList.add('hide');
    //     });
    //     slides[currentSlide - 1].classList.remove('hide');

    //     if(slides.length < 10) {
    //         current.textContent = `0${currentSlide}`;
    //     } else {
    //         total.textContent = currentSlide;
    //     }
    // }

    // function plusCounter(n) {
    //     showSlide(currentSlide += n);
    // }

    // if(slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }


    // showSlide(currentSlide);

    // prevArrow.addEventListener('click', () => {
    //     plusCounter(-1);
    // });

    // nextArrow.addEventListener('click', () => {
    //     plusCounter(1);
    // });
}

export default slider;