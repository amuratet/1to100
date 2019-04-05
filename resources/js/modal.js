const modalContainer = document.getElementById('modalContainer');
const modalContent = document.getElementById('h3');

const modalButton = document.getElementById('modalButton');
modalButton.addEventListener('click', undisplayModal);
function undisplayModal() {
    modalContainer.id = 'modalContainer';
    modalContainer.style.display = 'none';
}

// displayModalWindow();

function displayModalWindow(text) {
    modalContainer.id = 'displayedModalContainer';
    modalContainer.style.display = 'block';
    modalContent.innerHTML = text;
    // window.location.reload();
}