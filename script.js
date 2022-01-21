let body = document.body;
let popup = document.querySelector('.popup'); 
let popupBody = document.querySelector('.popup__body'); 
let openPopup = document.querySelector('.open-popup'); 
let closePopup = document.querySelector('.close-popup'); 

openPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    popupBody.classList.add('active');
    body.classList.add('modal-open');
});

closePopup.addEventListener('click', (e) => { 
    e.preventDefault();
    popup.classList.remove('active');
    popupBody.classList.remove('active'); 
    body.classList.remove('modal-open');
});

document.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
        popupBody.classList.remove('active');  
        body.classList.remove('modal-open');
    }
});

document.addEventListener('keydown', (e) => {
    if( e.key === 'Escape') {
        popup.classList.remove('active');
        popupBody.classList.remove('active');  
        body.classList.remove('modal-open');
    }
}); 
