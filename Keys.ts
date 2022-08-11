export function keys(params:any): string[] {
    if (typeof params !== "object") params = new Object(params)
    return Object.keys(params)
}

