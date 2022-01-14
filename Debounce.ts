function debounce(fun?:any,time=2000): Function | never {
    if (!fun || typeof fun !== 'function') throw new TypeError('请传入函数!')
    let flag:any
    return () => {
        clearTimeout(flag)
        flag = setTimeout(() => fun(),time)
    }
}

