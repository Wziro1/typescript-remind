"use strict";
// what is the types of typescript
// type string = string;
// type number = number;
// type boolean = boolean;
// type arrayOfString = Array<string>;
// type arrayOfNumber = Array<number>;
// type arrayOfBoolean = Array<boolean>;
// type object = object;
let Diaa = {
    name: 'Diaa',
    age: 19,
    birthday: new Date(2004, 3, 24),
    isMarried: false,
    hobbies: ['Sports', 'Programming'],
    job: {
        title: 'Software Engineer',
        salary: 1000,
    },
    address: {
        city: 'Cairo',
        country: 'Egypt',
    },
    getBirthYear: () => {
        return Diaa.birthday.getFullYear();
    },
    setBirthYear: (newYear) => {
        Diaa.birthday.setFullYear(newYear);
    },
    email: 'diaa@gmail.com',
    phone: '0123456789',
    rooms: ['Rooms: 4'],
};
console.log(Diaa);
console.log(Diaa.setBirthYear(2003));
console.log(Diaa.getBirthYear());
// what is type assertion (give me an example)
// type assertion is like (as)
const person = {
    name: 'Diaa',
    age: 19,
    birthday: new Date(2004, 3, 24),
    isMarried: false,
    hobbies: ['Sports', 'Programming'],
    job: {
        title: 'Software Engineer',
        salary: 1000,
    },
    address: {
        city: 'Cairo',
        country: 'Egypt',
    },
    getBirthYear: () => {
        // here we use type assertion
        return person.birthday.getFullYear();
    },
    setBirthYear: (newYear) => {
        // here we use type assertion
        person.birthday.setFullYear(newYear);
    },
    email: 'diaa@gmail.com',
    phone: '0123456789',
    rooms: ['Rooms: 4'],
};
// what is enum (give me an example)
// enum is like (const)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const myDirection = Direction.Left;
// what is namespace (give me an example)
// namespace is like (let)
var Mohammed;
(function (Mohammed) {
    Mohammed.name = 'Mohammed';
    Mohammed.age = 19;
    Mohammed.birthday = new Date(2004, 3, 24);
    Mohammed.isMarried = false;
    Mohammed.hobbies = ['Sports', 'Programming'];
    Mohammed.job = {
        title: 'Software Engineer',
        salary: 1000,
    };
    Mohammed.address = {
        city: 'Cairo',
        country: 'Egypt',
    };
    Mohammed.getBirthYear = () => {
        return Mohammed.birthday.getFullYear();
    };
    Mohammed.setBirthYear = (newYear) => {
        Mohammed.birthday.setFullYear(newYear);
    };
    Mohammed.email = 'Mohammed@gmail.com';
})(Mohammed || (Mohammed = {}));
// what is literal type (give me an example)
// literal type is like (const)
const literalType = 'a';
