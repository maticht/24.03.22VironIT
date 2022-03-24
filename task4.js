function compress (str) {
    let output ='';
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        count++;
        if (str[i] !== str[i+1]) {
            output += str[i] + count;
            count = 0;
        }
    }
    return output
}
console.log(compress('aabbccc'))
console.log(compress('a'))
console.log(compress('aabbb'))
console.log(compress('aabbbcccdtyee'))
console.log(compress('aaabcc'))

function uncompress (str) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
            output += str[i].repeat(str[i+1]);
            output[i] += output[i+1]
        }
    return output
}
console.log(uncompress('a2b3k2i2'))
console.log(uncompress('a2b1c3'))
console.log(uncompress('a2b3'))
console.log(uncompress('a5'))




