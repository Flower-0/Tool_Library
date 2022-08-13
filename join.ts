export function join<T>(params: T[], connect?: string): string {
    connect ? '' : connect = ","
    return params.join(connect)
}
