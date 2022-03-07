// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("hello", () => {
//
//   // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//   it("returns a string that says hi", () => {
//
//     //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi")
//   })
// })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSeq", () => {
  it("takes in a number greater than 2 to equal the length of a new array containing the numbers of the Fibonacci sequence", () => {
    expect(fibSeq(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// GOOD FAILURE

// b) Create the function that makes the test pass.

// PSEUDOCODE
// 1. Create a function named fibSeq that takes a number(n) as a parameter
// 2. Create a starting array of [1,1] so we at least start with two numbers to add. The rest will be dynamic.
// 3. Use a for loop to iterate n-2 times, since we hard coded our first two numbers.
// 4. Push the product of the current index and the index after it onto the end of the array.
// 5. Return the final array outside of the body of the for loop to save from getting every updated array as the for loop runs.
// CODE
const fibSeq = (n) => {
  var array = [1,1]
  for (let i=0; i < n-2; i++) {
    array.push(array[i]+(array[i+1]))
  }
  return array
}
// TEST PASSED





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("littleBigOdds", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(littleBigOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(littleBigOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})
// GOOD FAILURE

// b) Create the function that makes the test pass.

// PSEUDOCODE
// 1. Create a function named littleBigOdds that takes in an array as a parameter
// 2. Filter every value that isn't a number AND every value that isn't odd
// 3. Store the filtered values on a new array because the array inputs given are stored on immutable consts.
// 4. Sort the final filtered results
// CODE
const littleBigOdds = (array) => {
var filtArr = array.filter(value => typeof value === "number" && value % 2 !== 0)
return filtArr.sort((a,b)=>a-b)
}
// TEST PASSED





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("cumSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(cumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(cumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(cumSum(numbersToAdd3)).toEqual([])
  })
})
// GOOD FAILURE

// b)

// PSEUDOCODE
// 1. Create a function named cumSum to that takes in an array as a parameter and will output the cumulative sum of all the previous values at each index.
// 2. Store a variable named accumulation that will start at 0 be operated on and changed through each iteration of the array
// 3. Store the output of a mapped array on a new variable.
// 4. Map through the array operating on the current value and accumulation while storing the new accumulation to be operated on for the next iteration.
// 4. Return new accumulation in the map function onto the current index.
// 5. Outside of the map function, output the newly stored array.
// CODE
const cumSum = (array) => {
  var accumulation = 0
  var output = array.map(v => {
    accumulation = v + accumulation
    return accumulation
  })
  return output
}
// TEST PASSED
