const resumeBtns = document.querySelector('.resume-btn');
resumeBtns.forEach((btn,idx) => {

    btn.addEventListener('click', () => {
        btn.addEventListener('click',() =>
        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
        }))
        btn.classList.add('active');
        });
});