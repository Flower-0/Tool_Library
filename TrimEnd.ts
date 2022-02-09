function trimEnd(str: string, remove?: string): never | string  {
    if (typeof str !== 'string') throw new TypeError("Please pass in a string")
    let result = "", i = 0, length = str.length - 1
    if (remove === undefined) {
        while (length >= 0) {
            if (str[length] === " ") {
                length--
                continue
            }
            break
        }
    } else {
        while (length >= 0) {
            if (str[length] === remove[0]) {
                length--
                break
            }
            length--
        }
    }
    while (i <= length) {
        result += str[i]
        i++
    }
    return result
}

let test = '  abc  '
console.log(trimEnd('-_-abc-_-', '_-'))
console.log(trimEnd(test).length,test[4]);

