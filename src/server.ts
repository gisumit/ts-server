interface User {
    name: string;
    age?: Number;
}

const getName = (name: string, age: Number):User  => ({ name, age});

const sumit = getName('Sumit Ingole', 25); 