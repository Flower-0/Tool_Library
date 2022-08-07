export function initial(params: any[]): any[] {
    params.splice(params.length - 1, 1)
    return params
}


