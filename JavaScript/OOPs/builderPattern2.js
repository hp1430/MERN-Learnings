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
        return this.#name;
    }


    static get Builder() {          // static to make it associated to the class not object
                                    // it will be used to create the builder object that we passed in the constructor

        class Builder {
            constructor(){
                this.name = "";
                this.price = 0;
                this.description = "";
                // setting default values
            }

            setName(incomingName){
                this.name = incomingName;
                return this;                // using this we can avoid again and again function calls...
            }

            setPrice(incomingPrice){
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription){
                this.description = incomingDescription;
                return this;
            }


            build(){
                return new Product(this);
            }
        }

       // return Builder;           // returning the builder class from builder getter function
       return new Builder();        // returning the new builder object
    }
}

const p = Product.Builder.setName("I Phone").setPrice(125000).build();

console.log(p.name);