// Ниже приведён объект 'bobsCar'
// Напишите конструкцию if таким образом
// Если свойство 'mileage' ровно 0 то выводится строка 'Bob owns Subaru Impreza and it is brand new!'
// Если свойство 'mileage' меньше 1000 то выводится строка 'Bob owns Subaru Impreza and it is almost new!'
// В остальных случаях выводится строка 'Bob owns Subaru Impreza and it is old!'

const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 0
    }
}



// Напишите функцию, которая будет принимать два параметра - 'x, y'
// проверит каждый из них
// Если какой-то из них отрицательный, заменит его на положительный и сложит их
// x = -2 y = -3 результат 5





// Ниже приведён объект 'registry' - запись о владении недвижимостью
// скопируйте объект и измените данные владельца
// данные нового владельца приведены в объекте 'newOwner'
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



// напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];




// Напишите программу которая проанализирует данный массив с объектами
// и добавит в новый массив только имена тех людей кому 18 и старше

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



// напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];




// Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];


