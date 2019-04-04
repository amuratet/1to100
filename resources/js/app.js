// Nombre de DIVs
const divAmount = 100;

// Nombre de tentatives
const attemptAmount = 6;

// Conteneur des cases
const divLocation = document.getElementById('numberFrames');

// Création des cases de chiffre
function createAFrame(number) {
    let newFrame = document.createElement('div');
    newFrame.id = 'number';
    newFrame.className = 'frames';
    newFrame.innerHTML = number;

    divLocation.appendChild(newFrame);
    console.log(newFrame);
    
}

createAFrame(1);
