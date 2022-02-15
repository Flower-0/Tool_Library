function size(params:Object): never | number {
    if (typeof params === "undefined") throw new TypeError("Please pass in parameters!")
    return Object.keys(params).length
}

console.log(size("xxx"));
console.log(size({ 'a': 1, 'b': 2 }));
console.log(size('pebbles'));


