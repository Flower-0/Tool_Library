export function Mean(params: any): number | never {
    if (!Array.isArray(params) || !params.length) throw new TypeError("Please enter an array!")
    let result = 0
    params.forEach((item) => {
        result += item
    })
    return result/params.length
}

const arr = [1,2,3]

console.log(Mean(arr));
