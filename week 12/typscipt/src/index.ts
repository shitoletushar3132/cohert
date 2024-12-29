interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;
/// do not repeat create a new object or interface use existance to relibality increases

type UpdatePropsOptional = Partial<UpdateProps>;
// if some fields are optional then how to manage that in Pick attribute

// const ss = "tushar"
// ss = 'tushar' // this will complain you because you change the constant variable
//  but if we do like const user = {name="tu", age=2} and user.name = "vi" this will not comaplaint
// because we change the interanl value of that not the its reference
/// but if i want to enforce to that

type User2 = {
  readonly name: string;
  readonly age: string;
};

const userEg: User2 = {
  name: "tu",
  age: "3",
};

// userEg.age = '434' /// it complains

type User3 = {
  name: string;
  age: number;
};

type Users = {
  [key: string]: User3;
};

const users: Users = {
  kunal: { name: "kunal", age: 3 },
};

// record to overcome the ugly synax of above to define the type to object we use
// Record<string,number>
/// reacord is used to  gives type to the objects

type Users2 = Record<string, User3>;

const users2: Users2 = {
  helo: {
    name: "hel",
    age: 34,
  },
};

const userMap = new Map<string, UpdatePropsOptional>();

userMap.set("tu", { name: "tushar", age: "hloe" });



