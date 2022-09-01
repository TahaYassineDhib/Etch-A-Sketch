let board = document.querySelector('.board');
let popupBtn = document.querySelector('#popup');





const setSize = () =>{
    let input = prompt('enter the size of the board: ')
    generateBoard(input);

}



const generateBoard =(size)=>{
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    for (let i =0 ; i < size**2; i++){
        let box= document.createElement('div');
        board.appendChild(box);
        board.style.gridTemplateColumns = `repeat(${size},1fr)`;
        board.style.gridTemplateRows = `repeat(${size},1fr)`
        box.style.border = 'solid black 1px';
        box.addEventListener('mouseover',()=>{
            box.style.backgroundColor = 'black';
        }
        
        )
        let clearBtn = document.querySelector('#clear');
        clearBtn.addEventListener('click',()=>{box.style.backgroundColor="white"})

    }
}
generateBoard(16);
popupBtn.addEventListener('click',setSize)



