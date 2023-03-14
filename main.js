const tudo = document.body;
let salvary = 0;
let salvarx = 0;
let coordenadas;

tudo.addEventListener('click', (rato)=>{
    salvarx = rato.x;
    salvary = rato.y;
    console.log(salvarx, salvary);
    tudo.innerHTML = "<span><i>aa</i></span>"
    let valores = document.querySelector('span');
    coordenadas = valores.getBoundingClientRect();
    coordenadas.x = salvarx-20;
    coordenadas.y = salvary-30;

    console.log(coordenadas)
    valores.style.setProperty('left', `${coordenadas.left}px`);
    valores.style.setProperty('top', `${coordenadas.top}px`);
   


    

})


