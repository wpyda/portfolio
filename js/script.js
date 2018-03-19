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

const closeSlide = (id) => {
    document.querySelector('main article#' + id).style.display = 'none';
    document.querySelector('header').style.display = 'block';
};

const closeList = document.querySelectorAll('.close');
closeList.forEach(element => {
    element.addEventListener('click', () => closeSlide('about'));
    element.addEventListener('click', () => closeSlide('work'));
    element.addEventListener('click', () => closeSlide('contact'));
});