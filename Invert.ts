export function invert(params:any): object {
    const result:any = {}
    Object.keys(params).forEach(item => {
        result[params[item]] = item
    })
    return result
}

