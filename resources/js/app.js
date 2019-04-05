// Conteneur des cases
const containerLocation = document.getElementById('framesContainer');

// Conteneur des tentatives
const attemptsContainerLocation = document.getElementById('attemptsContainer');



// Nombre de DIVs
const framesAmount = 100;


///////////////// Nombre de tentatives
let attemptsAmount = 6;
// let currentAttempt = 0;



////////////////////// Tableau des DIVs
let framesArray = [];
createFramesArray();
// Insérer les titres <h1> et <h2>
const titleH1 = document.querySelector('h1');
titleH1.innerText = `Devinez un nombre entre 0 et ${framesAmount}`;
const subTitle = document.getElementById('subTitle');
subTitle.innerText = `en ${attemptsAmount} tentatives max.`;



///////////////////// Tableau des tentatives
let attemptsArray = [];
createRemainingAttemptsArray();




/////////////////////// Création des cases de chiffre
function createAFrame(number) {
    let newFrame = document.createElement('div');
    let currentFrameNumber = document.createTextNode(`${number}`);
    newFrame.appendChild(currentFrameNumber);

    newFrame.className = 'frames';
    newFrame.id = number;
    newFrame.innerHTML = number;
    newFrame.style.backgroundColor = randomBackgroundColor();

    containerLocation.appendChild(newFrame);
}
function createFramesArray() {
    for (let i = 0; i <= framesAmount ; i++) {
        framesArray[i] = i;
        createAFrame(i);
    }
}
// Random backgrounds
function randomBackgroundColor() {
    let color = [];
    for (let i = 0 ; i < 3 ; i++) {
        color[i] = randomDarkColor();
    }
    let colorSet = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;
    return colorSet;
}
function randomDarkColor() {
    return Math.floor(Math.random()*200);
}





/////////////////////////// Création des tentatives
function createRemainingAttemptsArray() {
    for (let i = 0 ; i < attemptsAmount ; i++) {
        attemptsArray[i] = i;
        createRemainingAttemptsFrame(i);
    }
}
function createRemainingAttemptsFrame(number) {
    let attemptsFrames = document.createElement('div');
    let currentAttemptframe = document.createTextNode(`essai ${number+1}`);
    attemptsFrames.appendChild(currentAttemptframe);

    attemptsFrames.className = 'attempts';
    attemptsFrames.id = number;

    attemptsContainerLocation.appendChild(attemptsFrames);
    attemptsContainerLocation.style.cssText = 'display: flex; flex-flow: row wrap; justify-content: center;';
}


// framesArray = createFramesArray();
// console.log(framesArray);

