const block = document.querySelector('.block');
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function moveSquare() {
        const newLeft = Math.random() * (bodyWidth - block.clientWidth);
        const newTop = Math.random() * (bodyHeight - block.clientHeight);
        block.style.left = `${newLeft}px`;
        block.style.top = `${newTop}px`;
        block.style.backgroundColor = getRandomColor();
    }

    setInterval(() => {
        block.style.backgroundColor = getRandomColor();
    }, 500);

    setInterval(moveSquare, 1000);