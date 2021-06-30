const numbers = [1, 2, 3, 4, 5, 6]

const numberV2 = numbers.map(el => el * 2)

const numberV3 = []
for(let n of numbers) {
    numberV3.push(n * 2)
}

console.log(numbers, numberV2, numberV3)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const getScore = el => el.score

const result = students
        .map(getScore)
        .map(Math.ceil) // arredonda para cima
        // .map(Math.floor) arredonda para baixo

console.log(students, result)

