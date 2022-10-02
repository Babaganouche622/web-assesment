const widthInput = document.getElementById('widthInput');
const widthDisplay = document.getElementById('widthDisplay');

const heightInput = document.getElementById('heightInput');
const heightDisplay = document.getElementById('heightDisplay');

const colourInput = document.getElementById('colourInput');
const colourDisplay = document.getElementById('colourDisplay');

const colourMorph = document.getElementById('colourMorph');

widthInput.value = 50;
widthDisplay.innerHTML = '50px';

heightInput.value = 50;
heightDisplay.innerHTML = '50px';


colourInput.value = '#ff69b4'
colourDisplay.innerHTML = '#ff69b4'

colourMorph.style.width = `${widthInput.value}px`;
colourMorph.style.height = `${heightInput.value}px`;
colourMorph.style.backgroundColor = colourInput.value;


widthInput.addEventListener('input', update);
heightInput.addEventListener('input', update);
colourInput.addEventListener('input', update);

function update(e) {
    widthDisplay.innerHTML = `${widthInput.value}px`;
    heightDisplay.innerHTML = `${heightInput.value}px`;
    colourDisplay.innerHTML = colourInput.value;

    widthDisplay.style.color = colourInput.value;
    heightDisplay.style.color = colourInput.value;
    colourDisplay.style.color = colourInput.value;

    colourMorph.style.width = `${widthInput.value}px`;
    colourMorph.style.height = `${heightInput.value}px`;
    colourMorph.style.backgroundColor = colourInput.value;
}