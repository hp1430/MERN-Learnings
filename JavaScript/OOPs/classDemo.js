class Product {

    #name;
    #price;
    category;
    description;
    rating;

    constructor(name, price, category, description, rating){
        this.#name=name;
        this.#price=price;
        this.category=category;
        this.description=description;
        this.rating=rating;
    }

    addToCart() {
        console.log("Product added to cart");
    }

    removeFromCart() {
        console.log("Product removed from cart");
    }
    
    displayProduct(){
        console.log("Product displayed")
    }

    buyProduct() {
        console.log("Product bought");
    }

}

let iphone = new Product("iphone11", 125000, "a", "b", 5);

iphone.name="something";

console.log(iphone.name);