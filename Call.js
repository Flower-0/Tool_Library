Function.prototype.calls = function () {
    if (!arguments.length) return this();
    if (typeof arguments[0] !== "object") arguments[0] = new Object(arguments[0])
    const flag = Symbol("flag"),arr = []
    for (let i = 1; i < arguments.length; i++) arr.push(arguments[i])
    arguments[0].__proto__[flag] = this
    arguments[0][flag](...arr)
    delete arguments[0].__proto__[flag]
}

function test(...args) {
    console.log(this);
    console.log(args);
}

const obj = {
    name:"嘿嘿",
    age:"99"
}

test.call()
test.call("1")
test.call("1",2,3)
test.call(obj,1,2,3)

console.log("========");

test.calls()
test.calls("1")
test.calls("1",2,3)
test.calls(obj,1,2,3)