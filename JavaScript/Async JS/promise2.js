const pr = new Promise((res, rej)=>{
    console.log("Callback is trigerred by Promise constructor");

    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber%2==0) res();
    else rej();
});

console.log("New Promise object has been created");
console.log(pr);