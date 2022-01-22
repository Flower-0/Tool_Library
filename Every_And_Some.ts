interface Array<T> {
    everys:(callback?: any,obj?: any) => any | never
}

interface Array<T> {
    somes:(callback?: any,obj?: any) => any | never
}

if (!Array.prototype.everys) {
    Array.prototype.everys = function (callback?: any,obj?: any): any | never{
        if (!callback || typeof callback !== 'function') throw new TypeError("Please pass in the function")
        if (obj === undefined) obj = globalThis
        for(let i = 0; i< this.length; i++) if (!callback.call(obj,this[i],i,this)) return false
        return true
    }
}

if (!Array.prototype.somes) {
    Array.prototype.somes = function (callback?: any,obj?: any): any | never{
        if (!callback || typeof callback !== 'function') throw new TypeError("Please pass in the function")
        if (obj === undefined) obj = globalThis
        for(let i = 0; i< this.length; i++) if (callback.call(obj,this[i],i,this)) return true
        return false
    }
}


const isBelowThreshold = function( x: number,y: number) {
    console.log(x,y);
    return x > 1
}

const list3 = [10, 30, 390, 29, 10, 9];

console.log(list3.somes(isBelowThreshold));