function toUpper(str?: string): never | string {
    if (typeof str !== 'string') throw new TypeError("Please pass in a string")
    return str.toUpperCase()
}

console.log(toUpper('--foo-bar--'));
console.log(toUpper('fooBar'));
console.log(toUpper('__foo_bar__'));


