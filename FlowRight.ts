function add(...args: any[]): any{
    let result = 0
    args.forEach(item => result += item)
    return result
}

function flowRight(arr: Function[]): Function {
    let length = arr.length - 2;
    return (...args2: any[]) => {
        let result = arr[arr.length - 1](...args2);
        while(0<=length) {
            result = arr[length](result);
            length--
        }
        
        return result;
    }

}

function square(n:any) {
    return n * n;
  }
   
  function ss(n:any) {
      return n/4
  }

  function kk(n:any) {
      return n-90
  }
// @ts-ignore
let cco = flowRight([kk,ss,square,add])

console.log(cco(1,2));

