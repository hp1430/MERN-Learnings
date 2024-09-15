class Product {
    #price;
    #name;
    #description;

    constructor(builder) {
        // validations before object creation

        console.log("Calling Product constructor");
        this.#name = builder.name;
        if(builder.price > 0){
            this.#price=builder.price;
        }
        else{
            return {};
        }
        this.#description = builder.description;
    }

    get name()
    {

    }
    set name(name)
    {

    }
    get price()
    {

    }
    set price(p)
    {
        
    }
}