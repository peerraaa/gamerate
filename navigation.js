// Navigacija između sekcija
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const target = btn.dataset.section;
        sections.forEach(section => {
            if(section.id === target) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
