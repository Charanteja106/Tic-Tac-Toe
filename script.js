const boxes= document.querySelectorAll(".box")
const reset = document.querySelector(".Restart")


let currentPlayer = "X";
let gameBoard =['','','','','','','','','',];

let gameOver = false;

const winningConditions =[
    //Rows
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagonals
    [1,4,8],
    [2,4,6],
];

// fn to handle boxes box

function handleboxClick(event){
    if (gameOver) return;

    const box = event.target;
    const index = box.dataset.index;

    if (box.textContent !== '')
        return;

    box.textContent = currentPlayer;

    checkForWin();

    currentPlayer = currentPlayer === 'X' ? '0' : 'X'

}

function checkForWin(){
    for (const conditions of winningConditions){
        const [a, b, c] = conditions;
        const boxA = boxes[a].textContent;
        const boxB = boxes[b].textContent;
        const boxC = boxes[c].textContent;
        
        if(boxA === boxB && boxB === boxC && boxC !== ''){
            gameOver = true;
            
            alert(`Player ${boxA} wins!`);
        }
    }
}


alert("PLACE 3 IN A ROW")

//fn to reset game

function resetGame(){
    gameOver = false;
    currentPlayer = 'X';
    boxes.forEach(box => box.textContent = '');

}

boxes.forEach(box=>box.addEventListener('click' , handleboxClick));
reset.addEventListener('click' , resetGame);


const sound= document.querySelector("#volume")
const information= document.querySelector("#info")

sound.addEventListener("click" , () => {
    var audio = new Audio('music.mp3')
    audio.play();
});

function gameInfo(){
    information.textContent="The game is played on a grid that's 3 squares by 3 squares. You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."
    information.style.fontSize="large";
    information.style.color="#f0f0f0";
    information.style.textDecoration="underline"
    information.style.textDecorationColor="aqua"
    information.style.backgroundColor="black"
    
}

