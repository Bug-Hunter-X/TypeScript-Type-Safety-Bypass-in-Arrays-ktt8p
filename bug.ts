function printAllNumbers(numbers: number[]): void {
  for (const number of numbers) {
    console.log(number);
  }
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbers(myNumbers); // Works as expected

const myNumbers2: number[] = [1, 2, "3", 4, 5];
printAllNumbers(myNumbers2); // Type 'string' is not assignable to type 'number'.