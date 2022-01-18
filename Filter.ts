interface Array<T> {
    filters:(args:any[]) => any | never
}

interface IObj {
    name: string;
    age: number;
}

if (!Array.prototype.filters) {
    Array.prototype.filters = function (...args: any[]): any | never {
        if (!args.length || typeof args[0] !== 'function') throw new TypeError(`${args[0]} is not a function`)
        if (args[1] === undefined) args[1] = globalThis
        const arr:any[] = [],{length} = this
        for(let i = 0; i< length; i++) {
           if (args[0].call(args[1],this[i],i,this)) arr.push(this[i])
        }
        return arr
    }
}

const arr1:number[] = [1,2,3]

const obj1:IObj = { 
    name:"嘿嘿嘿",
    age:99
}

// arr1.filter()

// console.log(arr1.filter((x,y,z) => {
//     console.log(x,y,z,this);
//     return x >1
// },obj1));

// console.log(arr1.filter((x,y,z) => {
//     console.log(x,y,z,this);
//     return x >1
// }));

console.log("===========");

// arr1.filters()

// console.log(arr1.filters((x,y,z) => {
//     console.log(x,y,z,this);
//     return x >1
// },obj1));

// console.log(arr1.filters((x,y,z) => {
//     console.log(x,y,z,this);
//     return x >1
// }));