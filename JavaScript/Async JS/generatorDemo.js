function* myGenerator() {
    console.log("Execution Started");
    yield 100;
    console.log("line 4");
    yield 98;
    console.log("line 6");
    yield 97;
    console.log("line 8");
    yield 96;   
    console.log("line 10"); 
}
let i = myGenerator();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());