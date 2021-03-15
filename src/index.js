module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];

    bracketsConfig.forEach(([open, close]) => {
        openBrackets.push(open);
        closeBrackets.push(close);
    });

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (result < 0) return false;

        if (openBrackets.includes(str[i])) {
            let count = openBrackets.indexOf(str[i]) + 1; // 1,2,3
            result += count;
        }
        if (closeBrackets.includes(str[i])) {
            let count = closeBrackets.indexOf(str[i]) + 1; // 1,2,3
            result -= count;
        }
    }
    return !result ? true : false;
};
