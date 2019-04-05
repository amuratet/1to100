// Conteneur des cases
const containerLocation = document.getElementById('framesContainer');



// Nombre de DIVs
const framesAmount = 100;


// Nombre de tentatives
const attemptsAmount = 6;
let currentAttempt = 0;



// Tableau des DIVs
let framesArray = [];
createFramesArray(framesArray);
// Insérer les titres <h1> et <h2>
const titleH1 = document.querySelector('h1');
titleH1.innerText = `Devinez un nombre entre 0 et ${framesAmount}`;
const subTitle = document.getElementById('subTitle');
subTitle.innerText = `en ${attemptsAmount} tentatives max.`;


// Création des cases de chiffre
function createAFrame(number) {
    let newFrame = document.createElement('div');
    let currentFrameNumber = document.createTextNode(`${number}`);
    newFrame.appendChild(currentFrameNumber);

    newFrame.className = 'frames';
    newFrame.innerHTML = number;
    newFrame.style.backgroundColor = randomBackgroundColor();

    containerLocation.appendChild(newFrame);
    // console.log(newFrame);
    
}

function createFramesArray() {
    for (let i = 0; i <= framesAmount ; i++) {
        framesArray[i] = i;
        createAFrame(i);
    }
}


function randomBackgroundColor() {
    let color = [];
    for (let i = 0 ; i < 3 ; i++) {
        color[i] = randomDarkColor();
    }
    let colorSet = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`;
    return colorSet;
}
function randomDarkColor() {
    return Math.floor(Math.random()*120);
}


// framesArray = createFramesArray();
// console.log(framesArray);

