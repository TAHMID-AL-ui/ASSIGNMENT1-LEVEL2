// Problem 1
const filterEvenNumbers = (numbers: number[]) => {
  const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });

  return evenNumbers;
};

const evenNumbersResult = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2
const reverseString = (text: string) => {
  const reversedText = text.split("").reverse().join("");

  return reversedText;
};

const reverseStringResult = reverseString("typescript");

// Problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const stringResult = checkType("Hello");

const numberResult = checkType(42);

// Problem 4
const getProperty = (obj: any, key: string) => {
  return obj[key];
};

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const propertyResult = getProperty(user, "name");

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const bookResult = toggleReadStatus(myBook);

// Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);

    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

const result = student.getDetails();

// Problem 7
const getIntersection = (
  firstArray: number[],
  secondArray: number[]
) => {
  const commonNumbers = firstArray.filter(function (number) {
    return secondArray.includes(number);
  });

  return commonNumbers;
};

const intersectionResult = getIntersection(
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7]
);