// Your JS goes here
checkerBoard()
musicPlay()

function musicPlay() {
    let button = document.createElement('button');
    let body = document.getElementsByTagName('div')[0];
    body.appendChild(button);

    button.onclick = () => {
        const audioContext = new AudioContext();
        const element = document.querySelector(audio);
        const source = audioContext.createMediaElementSource(element);
        source.connect(audioContext.destination)
        element.play();
    }

    // if(userChoice === true) {
    // const audioContext = new AudioContext();
    // const element = document.querySelector(audio);
    // const source = audioContext.createMediaElementSource(element);
    // source.connect(audioContext.destination)
    // audio.play();
    // }
}

function checkerBoard() {
    let body = document.getElementsByTagName('body')[0];
    for(let i = 0; i < 63; i++) {
    let div = document.createElement('div');
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%'    
    div.style.backgroundColor = "#" + randomColor;
    div.classList.add('square')

    body.appendChild(div)
    }
    
}


setInterval(function flashingColors() {
    let div = document.querySelectorAll('div');

    div.forEach((elem) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        elem.style.backgroundColor = "#" + randomColor;
    })
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