function fetchIterator(arr){
    let idx=0;
    function next(){
        if(idx>=arr.length) return {value:undefined, done:true};
        const element = arr[idx];
        idx++;
        return {value:element, done:false};
    }
    return next;
}

let result = fetchIterator([1,2,3]);
console.log(result());
console.log(result());
console.log(result());