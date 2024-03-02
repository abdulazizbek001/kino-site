const elRezult = document.querySelector('.rezult');
const elRezultInput = document.querySelector('.rezult_input');
const elRezultSec = document.querySelector('.rezult_secuond');
const elFooter = document.querySelector('.footer');

elList.style.display = 'none';

setInterval(() => {
    elRezult.style.cssText = `
        width: 1000px;
        left: -1000px;
    `
    elList.style.display = 'flex';
    elFooter.style.display = 'inline-block';

}, 10000);