const a = {
    a:[{name:"u"},{name:"t"}],
    b:2,
    c:0,
    d:5
}

const b = {
    a:undefined,
    e:null,
    s:"",
    b:{e:89}
}

function objectMerge(...arr:object[]): object{
    const result = {}
    arr.forEach(item => {
        Object.keys(item).forEach(key => {
            if (result.hasOwnProperty(key)) {
                // @ts-ignore
                result[key] = [].concat(result[key],item[key])
            } else {
                // @ts-ignore
                result[key] = item[key]
            }
        })
    })
    return result
}

console.log(objectMerge(a,b));