const ticketLink = document.getElementById('ticketLink');
const poster = document.querySelector('.poster');
const foodNote = document.querySelector('.food-note');
const textElements = document.querySelectorAll('.brand, .presents, .callig, .meta-row, .venue, .food-note, .highlights, .fewseats, .ticket-btn');

ticketLink.href = 'https://chat.whatsapp.com/EBIiFRU9toR2VHtjAu5Ugw?s=sh&p=i&mlu=4';

textElements.forEach((element, index) => {
  element.style.animationDelay = `${index * 70}ms`;
  element.classList.add('text-effect');
});

requestAnimationFrame(() => {
  poster.classList.add('is-ready');
});

window.setTimeout(() => {
  foodNote.classList.add('is-ready');
}, 650);
