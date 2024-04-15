/* Write a JavaScript object and convert it into a JSON string.*/

let car ={
    manufacturer: "Toyota",
    model: 2023,
    Color: "Silver",

};
const jsonString = JSON.stringify(car);
console.log(jsonString);
