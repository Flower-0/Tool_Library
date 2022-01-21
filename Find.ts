interface Array<T> {
    finds:(callback?: any) => any | never
}

if (!Array.prototype.finds) {
    Array.prototype.finds =function (callback?: any): never | any {
        if (!callback || typeof callback !== 'function') throw new TypeError("Please pass in the function")
        for (let i = 0; i < this.length; i++) {
                if (callback(this[i],i,this)) return this[i]
        }
    }
}

const list2 = [1,2,3]

console.log(list2.finds((item: number) =>  item>1));
