// Your JS goes here
checkerBoard()

function checkerBoard() {
    let body = document.getElementsByTagName('body')[0];
    // body.style.background = 'linear-gradient(to right, rgba(21, 21, 213, 0), rgba(21, 21, 213, 1))';
    body.style.background = 'linear-gradient(135deg, blue, yellow)';
    for(let i = 0; i < 63; i++) {
    let div = document.createElement('div');
    //let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%'    
    //div.style.backgroundColor = "#" + randomColor;

    if(i % 2 === 0){
        div.style.backgroundColor = `rgba(14, 14, 240, ${.02 * i})`
        // div.style.backgroundColor = 'blue'
    } else {
        div.style.backgroundColor = `rgba(249, 249, 41, ${.02 * i})`
        // div.style.backgroundColor = 'yellow'
    }
    body.appendChild(div)
    }
    
}