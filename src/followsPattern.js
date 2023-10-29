function followsPattern(input) {
    if (input.length % 4 !== 0) {
        return false;
    }

    for (let i = 0; i < input.length; i += 4) {
        if (input[i] !== 'a' || input[i + 1] !== 'b' || input[i + 2] !== 'a' || input[i + 3] !== 'b') {
            return false;
        }
    }

    return true;
}

module.exports = followsPattern;