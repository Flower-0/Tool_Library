export function pick(front:any,behind:string | string[]): object {
    const result:any = {}
    if (typeof behind === 'string') {
        result[behind] = front[behind]
    } else {
        behind.forEach(item => {
            result[item] = front[item]
        })
    }   
    return result
}




