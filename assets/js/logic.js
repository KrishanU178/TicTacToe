console.log("TicTacToe by Krishanu Mandal");
let tapMusic = new Audio("assets/songs/boom.mpeg");
let gameOver = new Audio("assets/songs/funny.mpeg");
let TimeTogameOver = new Audio("assets/songs/areBhai.mpeg");
let turn = "X";
let gameover = false;

// Turn change function
const changeTurn = () =>{
    return turn === "X"? "O": "X"
}

// check for win Function
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won the Game";
            gameover = true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "180px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            TimeTogameOver.play();
            document.querySelector(".line").style.width = "20vw";
            gameOver.play();
        }
    })
}


//Logic of the game
let boxes = document.getElementsByClassName("gameBox");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            tapMusic.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "It's "+turn+" turn";
            
            }
        }
    })
})

// reset logic
reset.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameover = false ;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "It's "+turn+" turn";
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
    
})
