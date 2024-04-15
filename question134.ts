/* Take a JSON string and parse it into a JavaScript object.*/

let jsonString1 = '{"manufacturer": "Toyota", "Model": 2023, "color": "Silver"}';

let car1 =JSON.parse(jsonString1);
console.log(car1);
