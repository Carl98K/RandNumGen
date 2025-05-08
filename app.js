const passwordValue = document.getElementById("passwordValue");
const lowercaseValue = document.getElementById("lowercase");
const uppercaseValue = document.getElementById("uppercase");
const numbersValue = document.getElementById("numbers");
const symbolsValue = document.getElementById("symbols");
const rangeSlider = document.getElementById("slider");
const sliderNumber = document.getElementById("slider-number");
let passwordLength;
let isIncludeLowerCase;
let isIncludeUpperCase;
let isIncludeNumbers;
let isIncludeSymbols;

// Get value of range slider
passwordLength = Number(rangeSlider.value);
sliderNumber.textContent = rangeSlider.value;
function getSliderValue() {
    sliderNumber.textContent = rangeSlider.value;
    passwordLength = Number(rangeSlider.value);
}
rangeSlider.addEventListener("input", getSliderValue);

function checkCheckBoxes() {
    isIncludeLowerCase = lowercaseValue.checked ? true : false;
    isIncludeUpperCase = uppercaseValue.checked ? true : false;
    isIncludeNumbers = numbersValue.checked ? true : false;
    isIncludeSymbols = symbolsValue.checked ? true : false;
}

// Function for generating passwords
function generatePassword() {
    checkCheckBoxes();

    if (!isIncludeLowerCase && !isIncludeUpperCase && !isIncludeNumbers && !isIncludeSymbols) {
        passwordValue.textContent = "";

        return;
    }
    else {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "012345678998765432100123456789";
        const symbols = "`!@#$%^&*()_+-=?/\|<>;:'[]{}";

        let allowedChars = "";
        let password = "";

        allowedChars += isIncludeLowerCase ? lowercaseChars : "";
        allowedChars += isIncludeUpperCase ? uppercaseChars : "";
        allowedChars += isIncludeNumbers ? numbers : "";
        allowedChars += isIncludeSymbols ? symbols : "";

        for (let i = 0; i < passwordLength; i++) {
            let randomNum = Math.floor(Math.random() * allowedChars.length);

            password += allowedChars[randomNum];
        }

        passwordValue.style.color = "black";
        passwordValue.textContent = password;
    }
}


