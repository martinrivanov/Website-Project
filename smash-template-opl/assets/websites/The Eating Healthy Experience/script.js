let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');

if(btn){
    btn.addEventListener('click', () => {
        overlay.style.display = 'grid';
    })
}