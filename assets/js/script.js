const btnPrimary = document.querySelector('.buttons-primary');
const btnSecondary = document.querySelector('.buttons-secondary');
const btnTertiary = document.querySelector('.buttons-tertiary');
const imgCursor = document.querySelector('.buttons-cursor');
const btnOne = document.querySelector('#buttom-1');
const body = document.querySelector('body');


loadImg = (image) => {
    return `<img src="./assets/img/${image}" class="img-buttom"></img>`;
} 

insertButtonsPrimary = (image,text,classType) => {
    btnPrimary.innerHTML += `<button class="default-primary ${classType}">${image}${text}</button> `;
}

insertButtonsSecondary = (image,text,classType) => {
    btnSecondary.innerHTML += `<button class="default-primary default-secundary ${classType}">${image}${text}</button> `;
}

insertButtonsTertiary = (image,text,classType) => {
    btnTertiary.innerHTML += `<button class="default-primary default-tertiary ${classType}">${image}${text}</button> `;
}

insertImgCursor = (loadFrom) => {
    imgCursor.innerHTML += 
    `<div class="cursor-img">` +
        `<img src="./assets/img/${loadFrom}" alt="Default" class="img-default">` +
    `</div>`;
}

clickButton = () => {
    btnOne.addEventListener('click', () => {
        btnOne.classList.add('active');
        body.classList.add('activeCursor');
        btnOne.innerHTML = `<img src="./assets/img/load.png" class="img-buttom rotate"></img>Loading`;
        var interval = setInterval(removeClass = () => {
            btnOne.classList.remove('active');
            body.classList.remove('activeCursor');
            btnOne.innerHTML = 'Interaja comigo';
            open('https://www.linkedin.com/in/weslley-oliveira-5a3443238/', '_blank');
            clearInterval(interval);
        }, 3000);
    });
}


insertButtonsPrimary("", "Hover Primary", "hover-primary");
insertButtonsPrimary("", "Focus Primary", "focus");
insertButtonsPrimary("", "Disabled Primary", "disabled");
insertButtonsPrimary(loadImg("load.png"), "Loading Primary", "load");
insertButtonsPrimary(loadImg("move.png"), "Movable Primary", "move");

insertButtonsSecondary("", "Hover Secundary", "hover-secundary");
insertButtonsSecondary("", "Focus Secundary", "focus");
insertButtonsSecondary("", "Disabled Secundary", "disabled");
insertButtonsSecondary(loadImg("load.png"), "Loading Secundary", "load");
insertButtonsSecondary(loadImg("move.png"), "Movable Secundary", "move");

insertButtonsTertiary("", "Hover Tertiary", "hover-secundary");
insertButtonsTertiary("", "Focus Tertiary", "focus");
insertButtonsTertiary("", "Disabled Tertiary", "disabled");
insertButtonsTertiary(loadImg("load.png"), "Loading Tertiary", "load");
insertButtonsTertiary(loadImg("move.png"), "Movable Tertiary", "move");

insertImgCursor("pointer.png");
insertImgCursor("pointer.png");
insertImgCursor("pointer_disable.png");
insertImgCursor("pointer_load.png");
insertImgCursor("pointer_move.png");

clickButton();
