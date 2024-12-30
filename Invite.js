const starCount = 100;

function createStars() {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 5 + 2;
        star.style.width = '${size}px';
        star.stylr.height = '${size}px';
        star.style.left = '${Math.random() * 100}vw';
        star.style.top = '${Math.random() * 100}vh';
        star.style.animationDuration = '${Math.random() * 1 + 0.5}s';
        ReportBody.appendChild(star);
    }
}

createStars();