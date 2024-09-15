const pr = new Promise((res, rej)=>{
    console.log("Executer callback is triggred by the Promise Constructor");

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber%2==0) res();
        else rej();
    }, 5000);
});

console.log("Promise object has been created");
console.log(pr);