const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.save-btn')
const closePopupBtn = document.querySelector('.popup__btn')
const page = document.querySelector('.page')

openPopupBtn.addEventListener('click', () => {
    popup.showModal();
    page.classList.add('page_fixed');
})

closePopupBtn.addEventListener('click', () => {
    popup.close();
    page.classList.remove('page_fixed');
})