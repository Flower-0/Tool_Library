Function.prototype.binds = function (...args) {
    const arr = []
    if (args.length) {
        if (typeof args[0] !== "object" || args[0] === null) args[0] = new Object(args[0])
        for (let i = 1; i < args.length; i++) arr.push(args[i])
    }
    return (...args2) => {
        this.call(args[0],...arr,...args2)
    }
}

function test(...args) {
    console.log(this);
    console.log(args);
}

const obj = {
    name:"嘿嘿",
    age:"99"
}

// const result = test.bind()
// const result = test.bind(1,2,3)
const result = test.bind(obj)

result()

// const result2 = test.binds()
// const result2 = test.binds(1,2,3)
const result2 = test.binds(obj)

result2()