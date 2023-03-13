// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));  // ***** here, must be observed data type carefully *****

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for array
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));  // if we don't need any return
numbers.map(num => num * 2);  // if we need return

// for of on array-like object
// for in --> loop on an object

// add or remove from an array ******
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rayban', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal' };

// copy product array and then add newProduct
const newProducts = [...products, newProduct];

//  create a new array without one specific item
// remove item (phone) means create a new array without the item (phone)
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);