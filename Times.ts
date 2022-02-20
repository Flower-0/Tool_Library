function times<T>(i: number,params:T): T[]{
    const result:T[] = []
    while(i-->0) result.push(params)
    return result
}

console.log(times(4,0));
