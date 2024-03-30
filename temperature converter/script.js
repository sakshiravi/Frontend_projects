let celsiusInput = document.querySelector('input:nth-of-type(1)');
let fahrenheitInput = document.querySelector('input:nth-of-type(2)');
let kelvinInput = document.querySelector('input:nth-of-type(3)');


let resetButton = document.querySelector('#reset-button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});

kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

resetButton.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});
