/*  Explain how you can format a JSON string with proper indentation for readability.*/

let car2 ={
    manufacturer: "Toyota",
    model: 2023,
    Color: "Silver",

};
const jsonString2 = JSON.stringify(car2, null, 2);
console.log(jsonString2);
