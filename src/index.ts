// what is the types of typescript
// type string = string;
// type number = number;
// type boolean = boolean;
// type arrayOfString = Array<string>;
// type arrayOfNumber = Array<number>;
// type arrayOfBoolean = Array<boolean>;
// type object = object;

// type union = string | number | boolean;
// type tuple = [string, number, boolean];
// type mixed = string | number | boolean | object;
// type unionOrTuple = string | number | boolean | [string, number, boolean];

// type void = undefined | null;
// type never = never;
// type null = null;
// type undefined = undefined;
// type any = any;

// what is interface (give me an example)

// interface is like (let)
interface Person {
    name: string;
    age: number;
    birthday: Date;
    isMarried: boolean;
    hobbies: string[];
    job: Job;
    address: {
        city: string;
        country: string;
    };
    getBirthYear: () => number;
    setBirthYear: (newYear: number) => void;
    // can add more properties
    email: string;
    phone: string;
}

interface Person {
    name: string;
    rooms: [string];
}

let Diaa: Person = {
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
    setBirthYear: (newYear: number) => {
        Diaa.birthday.setFullYear(newYear);
    },
    email: 'diaa@gmail.com',
    phone: '0123456789',
    rooms: ['Rooms: 4'],
}

console.log(Diaa);
console.log(Diaa.setBirthYear(2003))
console.log(Diaa.getBirthYear())

// what is type alias (give me an example)
// type alias is like (const)
type Job = {
    title: string;
    salary: number;
}

// what is type assertion (give me an example)
// type assertion is like (as)
const person: Person = {
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
        return (person as Person).birthday.getFullYear();
    },
    setBirthYear: (newYear: number) => {
        // here we use type assertion
        (person as Person).birthday.setFullYear(newYear);
    },
    email: 'diaa@gmail.com',
    phone: '0123456789',
    rooms: ['Rooms: 4'],
}

// what is enum (give me an example)
// enum is like (const)
enum Direction {
  Up = 1, // this is the starting value
  Down, // 2
  Left, // 3
  Right, // 4
}

const myDirection: Direction = Direction.Left;

// what is namespace (give me an example)
// namespace is like (let)
namespace Mohammed {
    export const name = 'Mohammed';
    export const age = 19;
    export const birthday = new Date(2004, 3, 24);
    export const isMarried = false;
    export const hobbies = ['Sports', 'Programming'];
    export const job = {
        title: 'Software Engineer',
        salary: 1000,
    };
    export const address = {
        city: 'Cairo',
        country: 'Egypt',
    };
    export const getBirthYear = () => {
        return Mohammed.birthday.getFullYear();
    };
    export const setBirthYear = (newYear: number) => {
        Mohammed.birthday.setFullYear(newYear);
    };
    export const email = 'Mohammed@gmail.com';
}

// what is literal type (give me an example)
// literal type is like (const)
const literalType: 'a' | 'b' | 'c' = 'a';