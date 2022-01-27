const a1 = {
    a:[{name:"彦祖"},{name:"冠希"}],
    b:2,
    c:3,
    d:5
}

const b2 = {
    a:8,
    e:90,
    s:67,
    b:{ghs:89}
}

function megan(...arr) {
    const res = {}
    arr.forEach(item => {
        Object.keys(item).forEach(key => {
            if (res.hasOwnProperty(key)) {
                res[key] = [].concat(res[key],item[key])
            } else {
                res[key] = item[key]
            }
        })
    });
    return res
}

console.log(megan(a1,b2));