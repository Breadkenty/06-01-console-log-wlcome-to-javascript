const numberOfCupsOfCoffee = 0
const fullName = 'Kento Kawakami'
console.log(numberOfCupsOfCoffee, fullName)

const userName = window.prompt('What is your name?')
console.log(`Hello ${userName}`)

const firstOperand = parseFloat(window.prompt('Give me a number.'))
const secondOperand = parseFloat(window.prompt('Give me another number.'))

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(`First number: ${firstOperand} | Second number: ${secondOperand}`)
console.log(`Sum: ${sum}`)
console.log(`Difference: ${difference}`)
console.log(`Product: ${product}`)
console.log(`Quotient: ${quotient}`)
console.log(`Remainder: ${remainder}`)

const numbers = [
  2,
  45,
  74,
  43,
  51,
  99,
  66,
  70,
  71,
  28,
  48,
  43,
  56,
  67,
  50,
  93,
  41,
  38,
  12,
  79,
  16,
  25,
  18,
  96,
  18,
  61,
  81,
  33,
  38,
  39,
  29,
  22,
  91,
  69,
  63,
  67,
  13,
  81,
  30,
  43,
  77,
  28,
  23,
  6,
  42,
  38,
  3,
  26,
  24,
  13,
  76,
  75,
  26,
  38,
  75,
  76,
  52,
  5,
  27,
  41,
  65,
  58,
  57,
  20,
  4,
  92,
  91,
  49,
  80,
  13,
  87,
  55,
  21,
  37,
  27,
  83,
  66,
  55,
  19,
  6,
  33,
  91,
  19,
  44,
  57,
  65,
  92,
  44,
  23,
  73,
  4,
  58,
  78,
  56,
  79,
  12,
  69,
  10,
  1001,
  37,
]

// Smallest Number
let smallestNumber = numbers[0]

for (let number = 0; number < numbers.length; number++) {
  if (smallestNumber > numbers[number]) {
    smallestNumber = numbers[number]
  }
}

console.log(smallestNumber)

// Biggest Number
let biggestNumber = numbers[0]

for (let number = 0; number < numbers.length; number++) {
  if (biggestNumber < numbers[number]) {
    biggestNumber = numbers[number]
  }
}

console.log(biggestNumber)

// Sum of the numbers in array
let numbersSum = 0

for (let number = 0; number < numbers.length; number++) {
  numbersSum = numbersSum + numbers[number]
}

console.log(numbersSum)

// Average of the numbers in array
const numbersAverage = numbersSum / numbers.length
console.log(numbersAverage)

// Sum of all odd numbers in array
let sumOfOdd = 0

for (let number = 0; number < numbers.length; number++) {
  if (numbers[number] % 2 === 1) {
    sumOfOdd = sumOfOdd + numbers[number]
  }
}

console.log(sumOfOdd)

// Number of even numbers in the array
const evens = []

for (let number = 0; number < numbers.length; number++) {
  if (numbers[number] % 2 === 0) {
    evens.push(numbers[number])
  }
}

console.log(evens.length)
