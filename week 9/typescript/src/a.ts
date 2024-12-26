//type inference => by using the provided input it will gives the type to that
function sum(a: number, b: number): number {
  return a + b;
}
// const value = sum(1, 2);
// console.log(value);

function IsLegal(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// const res: boolean = IsLegal(3);
// console.log(res);

function hello(firstName: string) {
  console.log("hello " + firstName);
}

function runAfter1S(fn: () => void) {
  setTimeout(() => {
    fn();
  }, 1000);
}

// runAfter1S(() => {
//   console.log("ehoo");
// });

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // optinal Argument
}

function isLeagl(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log(user.firstName);
}

// isLeagl({
//   firstName: "Tushar",
//   lastName: "shitole",
//   age: 4,
// });

interface Person {
  name: string;
  age: number;
  greet(pharase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(pharase: string): void {
    console.log(`${pharase} ${this.name}`);
  }
}

const e = new Employee("tushar", 21);

type User2 = {
  firstName: string;
  lastName: string;
};

type GreetArg = number | string;

function greet2(id: GreetArg) {}

greet2(1);
greet2("1");

type Employee2 = {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
}

type TechLead = Employee2 & Manager;

const t: TechLead = {
  name: "e",
  startDate: new Date(),
  department: "fa",
};

/// what is difference in interface and types
// -> interfaces extends class, types not
// -> types should gives the union and intersection

function maxVal(arr: number[]) {
  let maxVal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}
maxVal([12, 234, 3, 44]);

// Modify doSome to accept the function and use it
function doSome(sum: (a: number, b: number) => number) {
  console.log("hello");
  console.log("Result:", sum(1, 3)); // Call the passed function with arguments
}

// Pass the function reference, not the call
doSome(sum);

type Input = number | string;
function firstEl(arr: Input[]) {
  return arr[0];
}
const value = firstEl([1, 2, 344, "tuahr", "shiotle"]);
