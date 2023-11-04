const liners = () => {
    let size = Math.random() * 12;
    let duration = Math.random() * 10;
    const e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e)

    e.style.width = 2+ size +'px';
    e.style.left = Math.random() * innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(() => {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(() => {
    liners();
}, 1000);