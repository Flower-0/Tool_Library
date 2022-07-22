function isSet(params: any): boolean {
    return params instanceof Set
}

console.log(isSet(new Set()));
