function reverseString(str: string): never | string {
    if (typeof str !== 'string') throw new TypeError("Please pass in a string")
    let result = "", length = str.length
    while (--length >= 0) result += str[length]
    return result
}
