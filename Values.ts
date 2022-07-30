export function values(params: object): any[] {
    if (typeof params !== 'object') params = new Object(params)
    return Object.values(params)
}

