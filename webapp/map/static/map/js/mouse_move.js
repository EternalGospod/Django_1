document.addEventListener('DOMContentLoaded', () => {
    const pic = document.getElementById('image');
    const moveLeftButton = document.getElementById('moveLeft');
    const moveRightButton = document.getElementById('moveRight');
    const moveUpButton = document.getElementById('moveUp');
    const moveDownButton = document.getElementById('moveDown');
    const slider = document.getElementById('slider');
    const markers = document.querySelectorAll(".marker");

    let intervalId = null;
    let currentTop = 0;
    let currentLeft = 0;
    let scale = 1;

    // Функция для движения влево
    function moveLeft() {
        currentLeft = parseInt(pic.style.left || '0');
        pic.style.left = (currentLeft + 10) + 'px';
    }

    // Функция для движения вправо
    function moveRight() {
        currentLeft = parseInt(pic.style.left || '0');
        pic.style.left = (currentLeft - 10) + 'px';
    }

    // Функция для движения вверх
    function moveUp() {
        currentTop = parseInt(pic.style.top || '0');
        pic.style.top = (currentTop + 10) + 'px';
    }

    // Функция для движения вниз
    function moveDown() {
        currentTop = parseInt(pic.style.top || '0');
        pic.style.top = (currentTop - 10) + 'px';
    }

    // Добавляем обработчик события mousedown
    moveLeftButton.addEventListener('mousedown', () => {
        moveLeft();
        intervalId = setInterval(moveLeft, 100); // Повторяем каждые 100 миллисекунд
    });

    moveRightButton.addEventListener('mousedown', () => {
        moveRight();
        intervalId = setInterval(moveRight, 100);
    });

    moveUpButton.addEventListener('mousedown', () => {
        moveUp();
        intervalId = setInterval(moveUp, 100);
    });

    moveDownButton.addEventListener('mousedown', () => {
        moveDown();
        intervalId = setInterval(moveDown, 100);
    });

    // Добавляем обработчик события mouseup
    document.addEventListener('mouseup', () => {
        clearInterval(intervalId); // Остановить движение при отпускании кнопки
    });



    slider.addEventListener('input', () => {
        scale = slider.value;
        image.style.transform = `scale(${scale})`;
        handleScaleChange();
    });

    function hideMarkers() {
        markers.forEach(marker => {
            marker.style.display = "none"; // Скрываем маркеры
            marker.style.pointerEvents = "none"; // Делаем маркеры недоступными для взаимодействия
        });
    }

    // Функция, которая показывает маркеры
    function showMarkers() {
        markers.forEach(marker => {
            marker.style.display = "block"; // Показываем маркеры
            marker.style.pointerEvents = "pointer"; // Делаем маркеры доступными для взаимодействия
        });
    }

    // Функция для обработки изменений переменной scale
    function handleScaleChange() {
        if (scale > 1.09) {
            hideMarkers(); // Если scale больше 1, скрываем маркеры
        } else {
            showMarkers(); // В противном случае показываем маркеры
        }
    }

    // Вызываем функцию обработки изменений переменной scale при инициализации




});