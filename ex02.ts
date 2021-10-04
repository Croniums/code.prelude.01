function uppercase(str = ''): string{
    let result = ''
    for (let i =0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32)
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(uppercase('Chopper'))
console.log(uppercase('TONY TONY'))
console.log(uppercase('BonjouR'))