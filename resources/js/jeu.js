const randomNumber = Math.floor(Math.random()*framesAmount);
// const randomNumber = 10;

// Attrapper les éléments à cliquer par les classes
const clickableFrames = document.getElementsByClassName('frames');

// Attrapper les boites 'tentatives'
const attemptsBoxes = document.getElementsByClassName('attempts');

// Lancer le jeu
startGame();




function startGame() {
    for (let i = 0 ; i < clickableFrames.length ; i++) {
        clickableFrames[i].addEventListener('click', function(el){
            if (i === randomNumber) {
                youWin();
                i = 10000;
            }
            else if (attemptsAmount - 1 === 0) {
                youLose();
                i = 10000;
            }
            else if (i > randomNumber) {
                for (let y = i ; y <= framesAmount ; y++) {
                    clickableFrames[y].style.display = 'none';
                }
            }
            else if (i < randomNumber) {
                for (let y = i ; y >= 0 ; y--) {
                    clickableFrames[y].style.display = 'none';
                }
            }
            attemptsBoxes[attemptsAmount-1].style.display = 'none';
            attemptsAmount--;
        });
    }
}


function youWin() {
    let text = `Vous avez <span style="font-size: 1.7em;color: rgb(241, 55, 22);">gagné</span> !!!!!!!!!!!!!<br>Le nombre mystère était bien<br><span style="font-size: 1.7em;color: rgb(241, 55, 22);">${randomNumber}</span>`;
    displayModalWindow(text);
    
}
function youLose() {
    let text = `vous avez perdu =(<br>Le nombre mystère était<br><span style="font-size: 1.7em;color: rgb(241, 55, 22);">${randomNumber}</span>`;
    displayModalWindow(text);

}


