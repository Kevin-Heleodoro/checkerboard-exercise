// Your JS goes here
checkerBoard()

function checkerBoard() {
    let body = document.getElementsByTagName('body')[0];
    
    for(let i = 0; i < 63; i++) {
    let div = document.createElement('div');
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%'    
    div.style.backgroundColor = "#" + randomColor;

    body.appendChild(div)
    }
}