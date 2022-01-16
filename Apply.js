Function.prototype.applys = function() {
    if (!arguments.length) return this()
    if (arguments[1] !== undefined && !Array.isArray(arguments[1])) throw new TypeError("CreateListFromArrayLike called on non-object")
    if (arguments[1]) {
        this.call(arguments[0],...arguments[1])
    } else {
        this.call(arguments[0])
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

// test.apply()
// test.apply("s")  
// test.apply("1",111) 
// test.apply(undefined,[1,2,3])
// test.apply("",[1,2,3])
// test.apply(null,[1,2,3])
// test.apply(obj,[])

// console.log("=================")

// test.applys()
// test.applys("s")  
// test.applys("1",111) 
// test.applys(undefined,[1,2,3])
// test.applys("",[1,2,3])
// test.applys(null,[1,2,3])
// test.applys(obj,[])
