checkerBoard()

function checkerBoard() {
    let body = document.getElementsByTagName('body')[0];
    
    for(let i = 0; i < 63; i++) {
    let div = document.createElement('div');

    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%'    

    if (i % 2 === 0) {
        div.style.backgroundColor = 'red'
    } else {
        div.style.backgroundColor = 'black'
    }
    body.appendChild(div)
    }
}

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