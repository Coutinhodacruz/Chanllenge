function followsPattern(input, pattern) {
    const patternLength = pattern.length;

    if (input.length % patternLength !== 0) {
        return false;
    }

    for (let i = 0; i < input.length; i += patternLength) {
        for (let j = 0; j < patternLength; j++) {
            if (input[i + j] !== pattern[j]) {
                return false;
            }
        }
    }

    return true;
}

module.exports = followsPattern;
