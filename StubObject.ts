export function stubObject(params:number): object[] {
    const result:object[] = [];
    for (let i = 0; i <params; i++) {
        result.push({})
    }
    return result
}
