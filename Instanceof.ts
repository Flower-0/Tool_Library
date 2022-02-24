class MyObject { }

const obj4 = new MyObject()

function instanceOf(obj: any, fun: Function): boolean | never{
    if (typeof obj !== "object" || typeof fun !== "function") throw new TypeError("Please pass in the correct parameters!")
    let proto = obj.__proto__,prototype = fun.prototype
    while(proto) {
        if (proto === prototype) return true
        proto = proto.__proto__
    }
    return false
}
