function deduplication(arr?: any): never | Array<any> {
    if (!Array.isArray(arr)) throw new TypeError("Please pass in an array")
    // @ts-ignore
    const flag = Symbol<string>("flag")
    for (let x = 0; x < arr.length; x++) {
        for (let y = x + 1; y < arr.length; y++) {
            if (arr[x] === arr[y]) arr[y] = flag
        }
    }
    const result = []
    for (let z = 0; z < arr.length; z++) {
        if (arr[z] === flag) continue
        result.push(arr[z])
    }
    return result
}

const list5 = [1, null, null, 20, 78, null, "", 90, undefined, 78, 102,102]
const list6 = [undefined, undefined]


console.log(deduplication(list5));

