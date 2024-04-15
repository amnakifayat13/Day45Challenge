/* Take a JSON string and parse it into a JavaScript object.*/
var jsonString1 = '{"manufacturer": "Toyota", "Model": 2023, "color": "Silver"}';
var car1 = JSON.parse(jsonString1);
console.log(car1);
