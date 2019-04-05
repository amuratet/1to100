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
            attemptsAmount--;
            attemptsBoxes[attemptsAmount].style.display = 'none';
            if (attemptsAmount === 0) {
                youLose();
            }
            else if (i === randomNumber) {
                youWin();
                return false;
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
        });
    }
}


function youWin() {
    alert("Vous avez gagné !!!!!!!!!!!!!");
}
function youLose() {
    alert("vous avez perdu");
}


