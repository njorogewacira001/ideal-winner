// asynchnonous
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then((result) => {
      console.log(result.message);
    })
    .catch((error) => {
      console.error(error);
    });



    // Using Arrow Functions and Array Methods
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(doubledNumbers, evenNumbers, sum);


// Class and Inheritance
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog("Buddy", "Labrador");
  dog.speak();


  // Fetch API for HTTP Requests
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));


  // Local Storage
localStorage.setItem("username", "john_doe");

const savedUsername = localStorage.getItem("username");

console.log("Saved Username:", savedUsername);


  

  