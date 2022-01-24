function min(arr?:any) {
    if (!arr) return
    let flag = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < flag) flag = arr[i]
    }
    return flag
}
