function Block(params: any[], target?: number): any[] {
    if (!target) target = 1;
    const sum = [];
    let newArr = [], last = 0;
    for (let x = 0; x < params.length; x++) {
        if ((x + 1) % target === 0) {
            for (let y = last; y <= x; y++) {
                newArr.push(params[y]);
            }
            sum.push(newArr)
            newArr = []
            last = x + 1
        }
    }
    if (last === params.length) return sum
    for (let z = last; z < params.length; z++) {
        newArr.push(params[z])
    }
    sum.push(newArr)
    return sum
}


console.log(Block([1, 2, 3, 4, 5, 6, 7], 3)) // [[1,2,3], [4,5,6],[7]]`
console.log(Block([1, 2, 3, 4, 5, 6, 7]))// [[1],[2],[3],[4],[5],[6],[7]]
console.log(Block([1, 2, 3, 4, 5, 6, 7], 8))// [[1, 2, 3, 4, 5, 6, 7]]