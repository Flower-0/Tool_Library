function dropRight<T>(arr?:any,value?:any): T[] | never {
    if (!arr || !Array.isArray(arr)) throw new TypeError(`${arr} is not an array`)
    const result:T[] = [],{length} = arr
    value = value ? value : 1
    if (value > length) return []
    for (let i = 0; i < length - value; i++) result.push(arr[i])
    return result
}

const list1 = [1, 2, 3, 4, 5]
 
console.log(dropRight<number>(list1));


