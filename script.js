
'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const navOne = document.querySelector('.one');
const navTwo = document.querySelector('.two');
const navThree = document.querySelector('.three');







const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;
const NAV_SIZE = navItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

navOne.addEventListener('click', jump);
navTwo.addEventListener('click', jump);
navThree.addEventListener('click', jump);





function jump(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    
   
    if(e.currentTarget.classList.contains('one')){
        if(e.currentTarget.classList.contains('active')){
        null
        } else{
        carouselItems[0].classList.add('active');
        navItems[0].classList.add('active');
        currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
        }
        
        
    } else if(e.currentTarget.classList.contains('two')){
        if(e.currentTarget.classList.contains('active')){
            null
            } else{
            carouselItems[1].classList.add('active');
            navItems[1].classList.add('active');
            currentCarouselItem.classList.remove('active');
        navItems[currentIndex].classList.remove('active');
            }
        
    } else if(e.currentTarget.classList.contains('three')){
        if(e.currentTarget.classList.contains('active')){
            null
            } else{
            carouselItems[2].classList.add('active');
            navItems[2].classList.add('active');
            currentCarouselItem.classList.remove('active');
        navItems[currentIndex].classList.remove('active');
            }
       
    }
    
    
}
    


function swipe(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(e.currentTarget.classList.contains('left')){
        if(currentIndex === 0){
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else{
            nextIndex = currentIndex - 1;
        }
    
      
    }

    else{
        if(currentIndex === CAROUSEL_SIZE -1){
            nextIndex = 0;
        }
        else{
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');

}