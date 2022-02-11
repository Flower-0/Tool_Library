function startsWith(str: string,el:string, target=0): never | boolean {
    if (typeof str !== 'string') throw new TypeError("Please pass in a string")
    return str[target] === el
 }

 console.log(startsWith('abc', 'a'));
 console.log(startsWith('abc', 'b'));
 console.log(startsWith('abc', 'b', 2));
 
 
 