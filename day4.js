//1
var person={
firstName:"Talari",
lastName:"Sulochana",
age:"23"
}
console.log(person);
person.city="New York";
console.log(person)

//2.
var Obj={
  productName:"fooditems",
  productprice:"Rs.200",
  productinStock:"ice-cream"

}
console.log(Obj)
Obj.productprice="Rs.300"
delete Obj.productinStock;
console.log(Obj)
//Q3.
let library = {
  fantasy: {
    books: ["The Hobbit", "Harry Potter", "The Witcher"]
  },
  mystery: {
    books: ["Sherlock Holmes", "The Girl with the Dragon Tattoo"]
  },
  romance: {
    books: ["Pride and Prejudice", "The Notebook"]
  }
};

library.scienceFiction = {
  books: ["Dune", "Neuromancer"]
};
console.log(library.fantasy.books[0]); 
delete library.mystery;
console.log(library);
//Q4
const user = {
  username: "john_doe",
  email: "john@example.com",
  address: {
    city: "New York",
    state: "NY",
    zip: "10001"
  }
};
Object.freeze(user);
user.email = "new_email@example.com";
console.log("Is user object frozen?", Object.isFrozen(user)); 
user.phone = "1234567890";
console.log(user);
//Q5
let car = {
  make: 'Toyota',
  model: 'Corolla',
  price: 20000
};
Object.seal(car);
delete car.make;
console.log(Object.isSealed(car));  
car.price = 21000;
console.log(car.price);
console.log(Object.isExtensible(car)); 
//Q6
const store = {
  name: "SuperMart",
  products: {
    electronics: {
      phones: {
        apple: {
          iPhoneX: { price: 999, stock: 20 },
          iPhone12: { price: 1099, stock: 15 },
        },
        samsung: {
          galaxyS21: { price: 799, stock: 25 },
          galaxyNote20: { price: 999, stock: 10 },
        },
      },
      laptops: {
        dell: {
          XPS13: { price: 1200, stock: 10 },
          Inspiron15: { price: 800, stock: 30 },
        },
        hp: {
          SpectreX360: { price: 1300, stock: 5 },
          Pavilion15: { price: 750, stock: 20 },
        },
      },
    },
    groceries: {
      fruits: {
        apples: { price: 2, stock: 100 },
        bananas: { price: 1, stock: 150 },
      },
      vegetables: {
        carrots: { price: 1.5, stock: 200 },
        spinach: { price: 1, stock: 100 },
      },
    },
  },
};

console.log(store.products.groceries.vegetables.spinach.stock); 
console.log(store.products.electronics.laptops.hp.Pavilion15.price); 