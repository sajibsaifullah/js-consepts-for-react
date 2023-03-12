const numbers = [89, 35, 98, 12];

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3.spread operator (...)
const newNumber = numbers;
numbers.push(99);

console.log(numbers);  // non-primitive number stores in memory address
console.log(newNumber);  // here both will change

const newNumber2 = [...numbers];

console.log(numbers);
console.log(newNumber2);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);