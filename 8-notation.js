const person = {
    name: 'Lal Nil Holud Mia',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'season',
    'son-name': 'Adam',
    address: 'Shahabag'
}

// dot notation
const prof1 = person.profession;

// bracket notation
const prof = person['profession'];

// [variable]======= dynamically
const pName = profession;
const prof3 = person[pName];

// 
const season = person[25];  // here we can't use dot notation (person.25)

// 
const son = person['son-name']