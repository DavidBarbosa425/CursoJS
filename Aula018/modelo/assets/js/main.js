const divEl = document.querySelector('.paragrafos');
const ps = divEl.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backGroundColorBody = styleBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = 'white';
    p.style.borderRadius = '10px';
}