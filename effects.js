const ticketLink = document.getElementById('ticketLink');
const poster = document.querySelector('.poster');
const foodNote = document.querySelector('.food-note');

ticketLink.href = 'https://chat.whatsapp.com/EBIiFRU9toR2VHtjAu5Ugw?s=sh&p=i&mlu=4';

requestAnimationFrame(() => {
  poster.classList.add('is-ready');
});

window.setTimeout(() => {
  foodNote.classList.add('is-ready');
}, 650);
