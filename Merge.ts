function merge(arr?:any): any[] {
    if (!Array.isArray(arr)) throw new TypeError("Please pass in an array!")
    const list = []
    for(let i = 0 ; i < arr.length ; i++) {
      if (Array.isArray(arr[i])) {
          list.push(...merge(arr[i]))
          continue
      }
      list.push(arr[i])
    }
    return list
}

const list7 = [1,2,3,[5,6,[7,8,[null, undefined,[10],{name:"cc"}]],101,67],"hehe"]

console.log(merge(list7));
