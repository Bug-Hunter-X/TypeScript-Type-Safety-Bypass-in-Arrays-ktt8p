function printAllNumbers(numbers: number[]): void {
  for (const number of numbers) {
    console.log(number);
  }
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbers(myNumbers); // Works as expected

// Solution: Add type guard or use a union type
function printAllNumbersSafe(numbers: (number | string)[]): void {
  for (const number of numbers) {
    if (typeof number === 'number') {
      console.log(number);
    } else {
      console.log(`Skipping non-number value: ${number}`);
    }
  }
}

const myNumbers2: (number | string)[] = [1, 2, "3", 4, 5];
printAllNumbersSafe(myNumbers2); // Handles mixed types gracefully

//Alternative solution using a type predicate
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function printAllNumbersSafe2(numbers: (number | string)[]): void {
    for (const number of numbers) {
        if (isNumber(number)){
            console.log(number);
        } else {
            console.log(`Skipping non-number value: ${number}`);
        }
    }
}

printAllNumbersSafe2(myNumbers2);