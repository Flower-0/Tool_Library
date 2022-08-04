export function endsWith(params: string,target: string, position?:number): boolean {
    position ? position = position - 1: position = params.length - 1
    return params[position] === target
}

