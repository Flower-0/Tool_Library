if (!Array.prototype.maps) {
    Array.prototype.maps = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!args.length || typeof args[0] !== 'function')
            throw new TypeError("".concat(args[0], " is not a function"));
        if (args[1] === undefined)
            args[1] = globalThis;
        var arr = [], length = this.length;
        for (var i = 0; i < length; i++)
            arr.push(args[0].call(args[1], this[i], i, this));
        return arr;
    };
}
var list = [1, 2, 3];
var obj = {
    name: "嘿嘿嘿",
    age: 99
};
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
