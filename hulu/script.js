const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

 closeBtn.addEventListener('click', closeModal);

 loginBtn.addEventListener('click', openModal);

 window.addEventListener('click', outsideClick);

 function openModal() {
     modal.style.display = 'block';
 }

 function closeModal() {
     modal.style.display = 'none';
 }

 function outsideClick(e) {
    
     if(e.target === modal) {
         closeModal();
     }
 }