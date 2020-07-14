const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

function moveLeft() {

    console.log("MOVING LEFT");
    
    
    let left = document.querySelector('.left');
    let main = document.querySelector('.main');
    let right = document.querySelector('.right');
    let hiddenRight = document.querySelector('.hidden-right');
    let hiddenLeft = document.querySelector('.hidden-left');
    

    hiddenLeft.classList.add('hidden');
    hiddenLeft.classList.add('hidden-right');
    hiddenLeft.classList.remove('hidden-left');

    left.classList.add('hidden-left');
    left.classList.remove('left');
    
    main.classList.add('left');
    main.classList.remove('main');
    
    right.classList.add('main');
    right.classList.remove('right');
    
    hiddenRight.classList.remove('hidden');
    hiddenRight.classList.add('right');
    hiddenRight.classList.remove('hidden-right');
    

    
}


function moveRight() {

    console.log("MOVING RIGHT");
    
    let hiddenRight = document.querySelector('.hidden-right');
    let right = document.querySelector('.right');
    let main = document.querySelector('.main');
    let left = document.querySelector('.left');
    let hiddenLeft = document.querySelector('.hidden-left');



    
    hiddenRight.classList.add('hidden');
    hiddenRight.classList.add('hidden-left');
    hiddenRight.classList.remove('hidden-right');
    
    right.classList.add('hidden-right');
    right.classList.remove('right');
    
    main.classList.add('right');
    main.classList.remove('main');
    
    left.classList.add('main');
    left.classList.remove('left');
    
    hiddenLeft.classList.remove('hidden');
    hiddenLeft.classList.add('left');
    hiddenLeft.classList.remove('hidden-left');
    
}