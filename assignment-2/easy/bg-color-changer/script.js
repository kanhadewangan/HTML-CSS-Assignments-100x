const redButton = document.querySelector('.btn-red');
const blueButton = document.querySelector('.btn-blue');
const greenButton = document.querySelector('.btn-green');
const yellowButton = document.querySelector('.btn-yellow');
const grayButton = document.querySelector('.btn-gray');
const purpleButton = document.querySelector('.btn-purple');
const applyBtn = document.getElementById('apply-color');
const input = document.getElementById('color-input')



var colorPicker = '#ffffff';


input.addEventListener('input',()=>{
    colorPicker = input.value;
    document.body.style.backgroundColor = colorPicker;
})
purpleButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';
});

grayButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'gray';
});
yellowButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});

redButton.addEventListener('click', () => {
    console.log('Red button clicked');
    document.body.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

greenButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});



// Optional: Reset button to clear the color
const resetButton = document.querySelector('.btn-gray');

resetButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '';
});