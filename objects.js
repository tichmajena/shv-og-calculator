// let person = new Object();
//
// person.name = "Daniel";
// person.eyeColor = "Blue";
// person.age = 27;
//
// // console.log(person.name);
// person.updateAge = function() {
//   return ++person.age;
// }
//
// console.log(person.age);
// person.updateAge();
// console.log(person.age);

let person = {};

// name: "Daniel",
// eyeColor: "Blue",
// age: 27,
// updateAge: function() {
//   return ++person.age;
// }

person.name = "Shadreck";
person.eyeColor = "Blue";
person.age = 27;
person.property = {
  car: 'blue',
  house: 'three rooms',
}
person.updateAge = function() {
  return ++person.age;
};



person.name;
person.property;
person.property.car;

person.updateAge();

document.querySelctor();









let document = {

  querySelector: function() {
    ...
  },

  element: {
    class: navSider,
    id: '',
    style: {
      backGroundColor: red,
      width: 100px,
      visibility: visible,
    }

  }

}

person.updateAge();

document.querySelector('.navSidebar').style.bacj;

do

  console.log(person);

//
// console.log(person);

function Person(name, eyeColor, age) {
  this.name = name;
  this.eyeColor = eyeColor;
  this.age = age;
  this.updateAge = function() {
    return ++this.age;
  };
}

let person01 = new Person("Daniel", "Blue", 27);
let person02 = new Person("jane", "Brown", 43);


//console.log(person01.name);
