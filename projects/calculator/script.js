const display = document.getElementById('display');
const numbers = document.querySelectorAll('.btns').forEach(btn => {
    btn.addEventListener('click', function () {
        if (display.textContent == 0) {
            display.textContent = btn.textContent;
        } else {
            display.textContent += btn.textContent;
        }
    });
});

const clear = document.querySelector('.clear').addEventListener('click', function () {
    display.textContent = 0;
});

const calculateResult = document.querySelector('.equals').addEventListener('click', function () {
    try {

        const result = eval(display.textContent);
        display.textContent = result.toFixed(2);

    } catch (error) {
        display.textContent = 'error';
    }
});

const del = document.querySelector('.delete').addEventListener('click', function () {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
});