document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const image = document.getElementById('image');

    slider.addEventListener('input', () => {
        const scale = slider.value;
        image.style.transform = `scale(${scale})`;
    });

});