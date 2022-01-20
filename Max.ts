function max(arr?:any): never | any {
    if (!arr || !Array.isArray(arr)) throw new TypeError("Please pass in an array!")
    let flag = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > flag) flag = arr[i]
    }
    return flag
}
