const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rayban', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
// 1. map: (map gives return, so we need to declare a variable. map gives an array as return)
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);


// 2. forEach: (forEach does not return a value, so here no need to declare a variable)
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {
    
})

// 3. filter: (filter takes a condition & gives an array as return)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

// 4. find:  (it gives first matched item)
const special = products.filter(p => p.name.includes('n'));
console.log(special);
