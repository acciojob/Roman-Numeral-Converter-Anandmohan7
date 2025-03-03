function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['CM', 900],
        2: ['D', 500],
        3: ['CD', 400],
        4: ['C', 100],
        5: ['XC', 90],
        6: ['L', 50],
        7: ['XL', 40],
        8: ['X', 10],
        9: ['IX', 9],
        10: ['V', 5],
        11: ['IV', 4],
        12: ['I', 1]
    };

    let result = "";

    for (let key in obj) {
        let [symbol, value] = obj[key];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases
console.log(convertToRoman(14));    // Output: "XIV"
console.log(convertToRoman(798));   // Output: "DCCXCVIII"
console.log(convertToRoman(36));    // Output: "XXXVI"
console.log(convertToRoman(1000));  // Output: "M"
console.log(convertToRoman(3999));  // Output: "MMMCMXCIX"

// Do not edit below this line
module.exports = convertToRoman;
