import { rejects } from "assert"

function lowercase(str = ''): string{
    let result = ''
    for (let i =0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32)
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(lowercase('Chopper'))
console.log(lowercase('TONY TONY'))
console.log(lowercase('BonjouR'))