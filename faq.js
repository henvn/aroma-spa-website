const faqChilds = document.querySelectorAll('.faq-child');

faqChilds.forEach(e => {
    e.addEventListener('click', () => {
        
        e.classList.toggle('active')
    })
});