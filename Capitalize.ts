export function capitalize(params:string): string {
    return `${params[0].toUpperCase()}${params.slice(1).toLowerCase()}`
}
