let container = document.querySelector("#etchCont");
let sizing;
let getCanvasSize = () => {
    let answer 
    do {
        answer = parseInt(prompt("What do you want the size of the canvas to be? 1-100"));
    } while (isNaN(answer) || answer < 1 || answer > 100);
    return answer;
};

let createCanvas = (n) => {
    let num = n * n;
    let contents;
    for (let i = 0; i < num; i++) {
        let content = document.createElement("div");
        content.addEventListener('mouseover', () => {
            content.classList.add("drawn");
        });
        content.classList.add("lines");
        container.appendChild(content);
        contents += content;
    };
    return contents;
};

let clear = () => {
    let lines = document.getElementsByClassName("lines");
    while (lines.length > 0) {
        lines[0].remove();
    };
    sizing = 0;
    return null;
}; 

let button = document.getElementById('start');
button.addEventListener('click', () => {
    clear();
    sizing = getCanvasSize();
    container.style.width = `${sizing * 16}px`;
    container.style.height = `${sizing * 16}px`;
    createCanvas(sizing);
});
