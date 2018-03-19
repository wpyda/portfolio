const about = document.getElementById('li-about');
const work = document.getElementById('li-work');
const contact = document.getElementById('li-contact');

const openSlide = (id) => {
    document.querySelector('main article#' + id).style.display = 'block';
    document.querySelector('header').style.display = 'none';
};

about.addEventListener('click', () => openSlide('about'));
work.addEventListener('click', () => openSlide('work'));
contact.addEventListener('click', () => openSlide('contact'));

// // "x" button
// const close = document.querySelector('.close');
// const bar1 = document.createElement('div').classList.add('bar');
// const bar2 = document.createElement('div').classList.add('bar');
//
// console.log('bar1', close);
// close.appendChild(bar1);

// TODO check these functions, it works only with 'about'
const closeSlide = (id) => {
    document.querySelector('main article#' + id).style.display = 'none';
    document.querySelector('header').style.display = 'block';
};

const close = document.querySelector('.close');
close.addEventListener('click', () => closeSlide('about'));
close.addEventListener('click', () => closeSlide('work'));
close.addEventListener('click', () => closeSlide('contact'));