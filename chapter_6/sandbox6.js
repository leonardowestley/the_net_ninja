// adding removing toggle classes in the DOM
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelector('p');

paras.forEach(p => {
if(p.textContent.includes('error')){
    p.classList.add('error');
}
if(p.innerText.includes('success')){
    p.classList.add('success');
}
});

const title = document.querySelector('title');

title.classList.toggle('test');
title.classList.toggle('test');