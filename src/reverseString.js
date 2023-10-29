function reverseString(string = String){
    let newString = '';
    for (let index = string.length - 1; index >= 0; index--) {
        newString += string[index];
    }
    return newString;
}
module.exports = reverseString;