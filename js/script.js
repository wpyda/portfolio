const about = document.getElementById('li-about');
const work = document.getElementById('li-work');
const contact = document.getElementById('li-contact');

const openSlide = (id) => {
    const select = document.querySelector('main article#' + id);
    const back = document.querySelector('header');

    select.classList.remove('section-disappears');
    select.classList.add('section-appears');
    select.style.display = 'block';

    back.classList.remove('section-appears');
    back.classList.add('section-disappears');
    setTimeout(() => back.style.display = 'none', 800);
};

about.addEventListener('click', () => openSlide('about'));
work.addEventListener('click', () => openSlide('work'));
contact.addEventListener('click', () => openSlide('contact'));

const closeSlide = (id) => {
    const select = document.querySelector('main article#' + id);
    const back = document.querySelector('header');

    select.classList.remove('section-appears');
    select.classList.add('section-disappears');
    setTimeout(() => select.style.display = 'none', 800);

    back.classList.remove('section-disappears');
    back.classList.add('section-appears');
    back.style.display = 'block';
};

const closeList = document.querySelectorAll('.close');
closeList.forEach(element => {
    element.addEventListener('click', () => closeSlide('about'));
    element.addEventListener('click', () => closeSlide('work'));
    element.addEventListener('click', () => closeSlide('contact'));
});