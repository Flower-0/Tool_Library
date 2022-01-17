interface Array<T> {
    maps:(args:any[]) => any | never
}

if (!Array.prototype.maps) {
    Array.prototype.maps = function (...args: any[]): any | never{
        if (!args.length || typeof args[0] !== 'function') throw new TypeError(`${args[0]} is not a function`)
        if (args[1] === undefined) args[1] = globalThis
        const arr = [],{length} = this
        for(let i = 0; i< length; i++) arr.push(args[0].call(args[1],this[i],i,this))
        return arr
    }
}

const list = [1,2,3]

const obj = { 
    name:"嘿嘿嘿",
    age:99
}

// list.map()
// list.map(1,2,3)
// list.map(function(x,y,z) {console.log(x,y,z,this)},2,3)
// list.map(function(x,y,z) {console.log(x,y,z,this)},null,3)
// list.map(function(x,y,z) {console.log(x,y,z,this)},"",3)
// list.map(function(x,y,z) {console.log(x,y,z,this)},obj)
// list.map((x,y,z) => console.log(x,y,z,this))

// console.log("================================");

// list.maps()
// list.maps(1,2,3)
// list.maps(function(x,y,z) {console.log(x,y,z,this)},2,3)
// list.maps(function(x,y,z) {console.log(x,y,z,this)},null,3)
// list.maps(function(x,y,z) {console.log(x,y,z,this)},"",3)
// list.maps(function(x,y,z) {console.log(x,y,z,this)},obj)
// list.maps((x,y,z) => console.log(x,y,z,this))


