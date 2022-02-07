function repeat(str: string,target:number): never | string {
    if (typeof str !== 'string' || typeof target !== 'number') throw new TypeError("Please pass in the correct parameters")
    let i = 0, result = "";
    while(i < target) {
        result = result.concat(str)
        i++
    }
    return result
}

console.log(repeat("abc",2));
