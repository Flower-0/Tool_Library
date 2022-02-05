function truncate(str: string, target: number): string {
    if (typeof str !== 'string') throw new TypeError("Please pass in a string");
    if (target === undefined) return str;
    let i = 0, result = "";
    while (i < target) {
        result += str[i]
        i++
    }
    return result + "....";
}

console.log(truncate("hello", 3));

