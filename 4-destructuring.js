//  1. array destructuring: (in the right side ---> array, variable, function )
// **** follow serial of array index ****

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

// console.log(boxify(90,34));

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

// const [firstMovie, secondMovie] = ['king khan', 'dhakar mastan'];
const [firstMovie, secondMovie] = student.movies;

// console.log([firstMovie, secondMovie]);

// 2. object destructuring: (here, serial ---> not matters)

// const { name, age } = { name: "Allu", age: 34 };
const { name, age } = { id: 1, name: "Allu", salary: 34000, age: 34 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification
const { brand } = employee?.specification?.watch;

// console.log({weight, address});

