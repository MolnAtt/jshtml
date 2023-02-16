main()

function main(){
    gomb.addEventListener('click', katt);
    gomb2.addEventListener('click', katt2);
}

function katt(){
    let g = document.querySelector('.grid-container');
    let r = Math.round(1+Math.random()*10);
    g.innerHTML += `<div class="grid-item">${r}</div>`;
}

function katt2(){
    let g = document.querySelector('.grid-container');
    let r = Math.round(1+Math.random()*10);
    let div = document.createElement('div');
    div.classList.toggle('grid-item');
    div.innerHTML=r;
    g.appendChild(div);
}