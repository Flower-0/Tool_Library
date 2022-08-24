export function stubArray(params:number): [][] {
    const result:[][] = [];
    for(let i = 0; i <params; i++) {
        result.push([])
    }
    return result
}

