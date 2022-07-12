function tail(arr:any): any[] | undefined{
    if (Array.isArray(arr)){
        return arr.splice(1)
    }
}


