// JavaScript Array Example
const userArray = ['Othoi', 'banik', 2012, 'three'];
console.log(userArray);

//check array data position (indexOf)
console.log(userArray.indexOf('banik'));
console.log(userArray.indexOf('three'));
console.log(userArray.indexOf(2012));

// boolean value return kore includes()-- eita case sensitive...
console.log(userArray.includes("banik"));
console.log(userArray.includes("Banik"));


//JavaScript Objects
/*
const objectName = {
    key: value,
    key: value,
  }
*/

const userObject = {
  firstName: "Othoi",
  lastName: "Banik",
  birthYear: 2012,
  class: "three",
};
console.log(userObject);
console.log(userObject.firstName);
console.log(userObject["firstName"]);
console.log(userObject.lastName);
console.log(userObject["lastName"]);
console.log(userObject.birthYear);
console.log(userObject["birthYear"]);
console.log(userObject.class);
console.log(userObject["class"]);

//change new value in object
userObject.birthYear = 2015;
console.log(userObject);

//Add new item in objects
userObject.hobby = "Reading Book";
console.log(userObject);
console.log(userObject.hobby);

userObject["favouriteFood"] = "fish";
userObject["birthPlace"] = "Feni";
console.log(userObject);
console.log(userObject["favouriteFood"]);
console.log(userObject["birthPlace"]);

//Object Example - 2
const userObject2 = {
  firstName: "sazib",
  lastName: "banik",
  isJob: false,
  calculateAge: function(birthYear){
    return 2023 - birthYear;
  },
};
console.log(userObject2.isJob);
console.log(userObject2.calculateAge(1997)); //calling Object Inner Function
console.log(userObject2["calculateAge"](1997));

// This KeyWord... ... ...
const userObject3 = {
  firstName: "Nejum",
  lastName: "Banik",
  birthYear: 2015,
  isStudent: true,
  calculateAge: function(){
    // console.log(this.birthYear);
    return 2023 - this.birthYear;
  },
  userDetails: function(){
    return `The user name is ${this.firstName} ${this.lastName}, born in ${this.birthYear}.`;
  }
};
console.log(userObject3.calculateAge());
console.log(userObject3.userDetails());

// JavaScript Loop... ... ... 
//for loop...
for (let i = 1; i <= 10; i++){
  console.log("the number is " + i);
}

//professional way...
for (let i = 1; i <= 3; i++) {
  console.log(`the number is ${i}`);
}

// While loop
let j = 1;
while (j <= 10){
  console.log(`the number show in while loop ${j}`);
  j++;
};

// loop in array
const newArray = ['data1', 'data2', 'data3', 'data4', 'data5'];
console.log(newArray);
// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);
// console.log(newArray[4]);

// array data show in for forward loop
for (let x = 0; x <= newArray.length - 1; x++){
  console.log(newArray[x])
}

// array data show in while forward loop
const newArray1 = ["data6", "data7", "data8", "data9", "data10"];
let k = 0;
while (k <= newArray1.length - 1){
  console.log(newArray1[k]);
  k++;
}

// array data show in for backward loop
for (let y = newArray.length - 1; y >= 0; y--){
  console.log(newArray[y]);
}

// array data show in while backward loop
let s = newArray1.length - 1;
while(s >= 0){
  console.log(newArray1[s]);
  s--;
}

// Break use case
const member = ["sazib", "srejon", "akash", "copil", "rokibur"];

// for (let m = 0; m < member.length; m++){
//   if (m == 3) {
//     console.log(member[m]);
//     break;
//   }else{
//     console.log(member[m]);
//   }
// }

for (let m = 0; m < member.length; m++) {
  if (m == 3) break;
    console.log(member[m]);
}

// continue use case (escap er moto kaj kore...)
for (let m = 0; m < member.length; m++) {
  if (m == 3) continue;
  console.log(member[m]);
}





























