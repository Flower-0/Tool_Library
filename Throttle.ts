function throttle(fun?:any,interval=2000): Function | never {
    if (!fun || typeof fun !== 'function') throw new TypeError("请传入函数!")
    let last_time = 0
    return function (e:ScrollBehavior) {
        let current_time = Date.now()
        if (current_time - last_time >= interval) {
            fun.call(this,e)
            last_time = current_time
        }
    }
}
