document.addEventListener('DOMContentLoaded', () => {
    const pic = document.getElementById('pic');
    const moveLeftButton = document.getElementById('moveLeft');
    const moveRightButton = document.getElementById('moveRight');
    const moveUpButton = document.getElementById('moveUp');
    const moveDownButton = document.getElementById('moveDown');

    // Установите начальные координаты для картинки в верхнем правом углу
    pic.style.top = '0';
    pic.style.right = '0';
    pic.style.left = ''; // Очистите значение left

    moveLeftButton.addEventListener('click', () => {
        pic.style.right = ''; // Очистите значение right перед движением влево
        const currentLeft = parseInt(pic.style.left || '0');
        pic.style.left = (currentLeft - 10) + 'px';
    });

    moveRightButton.addEventListener('click', () => {
        pic.style.left = ''; // Очистите значение left перед движением вправо
        const currentRight = parseInt(pic.style.right || '0');
        pic.style.right = (currentRight - 10) + 'px';
    });

    moveUpButton.addEventListener('click', () => {
        const currentTop = parseInt(pic.style.top || '0');
        pic.style.top = (currentTop - 10) + 'px';
    });

    moveDownButton.addEventListener('click', () => {
        const currentTop = parseInt(pic.style.top || '0');
        pic.style.top = (currentTop + 10) + 'px';
    });

});