interface IUser {
    name: string;
    age?: number;
}

const getName = (name: string, age: number): IUser  => ({ name, age});

const sumit = getName("Sumit Ingole", 25);
