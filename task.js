//!------------Task1-------------

const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 0
    }
}

if (bobsCar.info.mileage === 0) {
    console.log(`Bob owns ${bobsCar.make} ${bobsCar.model} and it is brand new!`)
} else if (bobsCar.info.mileage < 1000) {
    console.log(`Bob owns ${bobsCar.make} ${bobsCar.model} and it is almost new!`)
} else {
    console.log(`Bob owns ${bobsCar.make} ${bobsCar.model} and it is old!`)
}

//!------------Task2-------------

function num(x, y) {
    if (x < 0) {
        x = x * -1;
    }
    if (y < 0) {
        y = y * -1;
    }
    let num;
    num = x + y;
    return num;
}

const x = -2;
const y = -3;

console.log(num(x, y))

//!------------Task3-------------

const registry = {
    owner: {
        name: 'Mary Gold',
        age: 45
    },
    property: {
        type: 'House',
        bedrooms: 4,
        address: {
            country: 'England',
            city: 'London',
            street: 'Fulton rd.',
            houseNumber: 30

        }
    }
}

const newOwner = {
    name: 'Jack Smith',
    age: 50
}

function newRegistry(registry, newOwner) {
    let newObject = registry;
    if (undefined !== newObject.owner) {
        newObject.owner = newOwner;
    }
    return newObject;
}

const updatedRegistry = newRegistry(registry, newOwner);

console.log(updatedRegistry);

//!------------Task4-------------

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];

function sumEvenNumbers(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
}

const resultSum = sumEvenNumbers(numsArray);


console.log(resultSum);

//!------------Task5-------------

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
]

function filterOlder18(people) {
    const older18 = people.filter(person => person.age >= 18);
    console.log(older18);
}

filterOlder18(people);

//!------------Task6-------------

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];

function findLongestString(arr) {
    return arr.reduce((longestString, currentString) =>
        currentString.length > longestString.length ? currentString : longestString, '');
}

const longestString = findLongestString(strings);

console.log(longestString);

//!------------Task6-------------

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

function maxNumber(arr) {
    const numbersThree = arr.filter(number => number % 3 === 0);

    if (numbersThree.length === 0) {
        return false;
    }

    return Math.max(...numbersThree);
}

const result = maxNumber(numbers);

console.log(result);