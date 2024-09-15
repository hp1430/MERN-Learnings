const pr = new Promise((res, rej)=>{

    console.log("Promise object is triggered by the Promise Constructor");
    for(let i=0; i<100; i++) {}

});

console.log("New Promise object has been created");
console.log(pr);