function palindrome(str: string): boolean | never {
    return str === reverseString(str)
}

console.log(palindrome("3112113"));
