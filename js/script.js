const about = document.getElementById('li-about');
const work = document.getElementById('li-work');
const contact = document.getElementById('li-contact');

about.addEventListener('click', () => { document.querySelector('main article#about').style.display = 'block'; });
work.addEventListener('click', () => { document.querySelector('main article#work').style.display = 'block'; });
contact.addEventListener('click', () => { document.querySelector('main article#contact').style.display = 'block'; });