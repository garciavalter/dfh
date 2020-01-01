let btn = document.querySelector('button');
let input = document.querySelector('input');

btn.addEventListener('click', e => {
    e.preventDefault();
    let text = input.value;
    input.value="";
    console.log(text);
});

