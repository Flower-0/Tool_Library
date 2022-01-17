interface Array<T> {
    reduces:(fun?:any,value?:any ) => any | never;
}

if (!Array.prototype.reduces) {
    Array.prototype.reduces = function (fun?:any, value?:any): any | never {
        if (!fun || typeof fun !== "function") throw new TypeError(`${fun} is not a function`)
        if (value === undefined) value = this[0]
        if (value === this[0]) {
            for (var i = 1; i < this.length ; i++) value = fun(value,this[i],i,this)
        } else {
            for (var i = 0; i < this.length ; i++) value = fun(value,this[i],i,this)
        }
        return value
    }
}

const arr = [1,2,3]

// console.log(arr.reduce());
// console.log(arr.reduce(1));

// console.log(arr.reduce((x,y,z,i) => {
//     console.log(x,y,z,i);
//     return x + y
// },"ss"));


// console.log(arr.reduce((x,y,z,i) => {
//     console.log(x,y,z,i);
//     return x + y
// }));

console.log("=======");

// console.log(arr.reduces());
// console.log(arr.reduce(1));

// console.log(arr.reduces((x,y,z,i) => {
//     console.log(x,y,z,i);
//     return x + y
// },"ss"));



// console.log(arr.reduces((x:any,y:any,z:number,i:[]) => {
//     console.log(x,y,z,i);
//     return x + y
// }));


