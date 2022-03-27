export default function caesarCipher(str, shift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let shiftedAlphabet = '';

    for (let i = 0; i < alphabet.length; i++) {
        shiftedAlphabet += alphabet[(shift + i) % 26];
    }

    let strArr = str.split('');

    let finalStr = '';
    strArr.forEach(el => {
        finalStr += shiftedAlphabet[alphabet.indexOf(el)];
    });

    return finalStr;
}