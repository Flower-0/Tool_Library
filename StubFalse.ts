export function stubFalse(params:number): boolean[] {
    const result:boolean[] = []
    for(let i = 0; i < params ; i++) {
        result.push(false)
    }
    return result
}

