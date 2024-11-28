// Objects in javaScript

const mySym = Symbol("Key1");

// object literals
const userDetails = {
  userName: "mlnkhrl",
  "Full Name": "Milan Kharel",
  [mySym]: "key", // link symbol into objects
  email: "admin@example.com",
  phone: 4152639874,
  isLoggedIn: true,
  salary: 250000,
};

// both method prints a username
console.log(userDetails.userName); // this is not prefered to use
console.log(userDetails["userName"]);
console.log(userDetails["Full Name"]);

// print a symbol
console.log(userDetails[mySym]);

// change object values
userDetails.email = "admin@mlnkhrl.com";
console.log(userDetails["email"]);

// prevent updating objejct values
// Object.freeze(userDetails); // commented right now to access function inside object

// doesn't change object values
// userDetails.email = "admin@milankharel.com.np";
// console.log(userDetails["email"]); // commented because object isn't freezed

userDetails.greeting = function () {
  console.log("Hello Users");
};

userDetails.greetingTwo = function () {
  console.log(`Hello ${this["Full Name"]}`);
};

console.log(userDetails.greeting());
console.log(userDetails.greetingTwo());

// singleton object declaration
const singletonObject = new Object();

// non singleton object
const nonSingletonObject = {};
nonSingletonObject.id = 123;
nonSingletonObject.name = "Mee Lan";
nonSingletonObject.isLoggedIn = false;

console.log(nonSingletonObject);

// object inside an object
const anotherUsers = {
  email: "someone@example.com ",
  fullname: {
    userFullName: {
      firstName: "Mee",
      lastName: "Lan",
    },
  },
};

console.log(anotherUsers);

// object merge
const merObj1 = {
  userName: "mlnkhrl",
  fullName: "Milan Kharel",
  email: "admin@example.com",
};

const merObj2 = {
  phone: 4152639874,
  isLoggedIn: true,
  salary: 250000,
};

// const mergedObj = Object.assign({}, merObj1, merObj2);
const mergedObj = { ...merObj1, ...merObj2 };
console.log(mergedObj);

// extract keys and values from object
console.log(Object.keys(nonSingletonObject));
console.log(Object.values(nonSingletonObject));
console.log(Object.entries(nonSingletonObject)); // not much used

// to check if a property is available or not
console.log(nonSingletonObject.hasOwnProperty("name")); // returns true because we have a property called name

console.log(nonSingletonObject.hasOwnProperty("email")); // returns false because we don't have a property called email

// object de-structuring
const course = {
  courseName: "Introduction to JavaScript",
  price: "1000",
  courseInstructor: "Youtube",
};

console.log(course.courseInstructor);

// another method
const { courseInstructor } = course;
console.log(courseInstructor);

// we can rename a value also
const { courseInstructor: Instructor } = course;
console.log(Instructor);
