function lowerFirst(str:string): never | string {
    if(typeof str !== 'string') throw new TypeError("Please pass in a string")
    return str[0].toLowerCase()+str.slice(1)
}

