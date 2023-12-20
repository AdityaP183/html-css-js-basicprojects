const cards = document.querySelectorAll('.panel');

const removeActiveClass = () => {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}


cards.forEach(card => {
    card.addEventListener('click', (e) => {
        removeActiveClass()
        card.classList.toggle('active');
    })
})