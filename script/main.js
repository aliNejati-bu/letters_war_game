let keyBoardWrapper = document.querySelector('#keyboard');
let laters = ["ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د",

    "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ",

    "ف", "ق", "ک", "گ", "ل", "م", "ن", "و", "ه", "ی"];
laters.forEach(w => {
    keyBoardWrapper.innerHTML += `<button class="letter"> ${w} </button>`;
});