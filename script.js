// Your JS goes here
checkerBoard()

function checkerBoard() {
    let body = document.getElementsByTagName('body')[0];
    // body.style.background = 'linear-gradient(to right, rgba(21, 21, 213, 0), rgba(21, 21, 213, 1))'; FAILED 
    // body.style.background = 'linear-gradient(135deg, blue, yellow)';
    for(let i = 0; i < 63; i++) {
    let div = document.createElement('div');
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%'    
    div.style.backgroundColor = "#" + randomColor;
    div.classList.add('square')

    // if(i % 2 === 0){
    //     // div.style.backgroundColor = `rgba(14, 14, 240, ${.02 * i})`
    //     // div.style.backgroundColor = 'blue' FAILED
    // } else {
    //     // div.style.backgroundColor = `rgba(249, 249, 41, ${.02 * i})`
    //     // div.style.backgroundColor = 'yellow' FAILED
    // }
    body.appendChild(div)
    }
    
}


setInterval(function flashingColors() {
    let div = document.querySelectorAll('div');
    let body = document.getElementsByTagName('body');
    

    div.forEach((elem) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        elem.style.backgroundColor = "#" + randomColor;
    })
    // body.appendChild(div);
}, 2000);

// function checkerBoard() {
//     let body = document.getElementsByTagName('body')
//     let gridContainer = document.createElement('div');
//     let gridRow = document.createElement('div');
//     let gridBox = document.createElement('div');

//     gridBox.style.width = '11.1%'
//     gridBox.style.float = 'left'
//     gridBox.style.paddingBottom = '11.1%'

//     for(let row = 0; row < 9; row++) {
//         for(let box = 0; box < 9; box++) {
//             if(box % 2 === 0) {
//                 gridBox.style.backgroundColor = 'red'
//                 //
//             } else {
//                 gridBox.style.backgroundColor = 'black'
//             }
//             gridRow.appendChild(gridBox);
//         }
//         gridContainer.appendChild(gridRow)
//     }

//     document.body.append(gridContainer)
// }