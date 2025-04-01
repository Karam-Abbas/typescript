// var a = 123;
// console.log(a);
// enum codes{
//     NotFound = 404,
//     Error = 500
//     }
// console.log(codes.NotFound);

// let a: unknown ;
// // a ="karam"
// // a.toUppercase() // this will throw error until you first check the type of this

// if (typeof(a) === "string")
// {
//     a.toUpperCase()    // Now this will work perfectly fine.
// }

// interface User{
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     gender?: string; // optional
// }

// const abcd = (obj:User):void=>{
// console.log(obj);
// }

// abcd({ id:12, name: "Karam", age:21, email: "k@m.com"});
// abcd({ id:12, name: "Karam", age:21, email: "k@m.com",gender:"M"});

// interface User{
//     id:String,
//     name:string
// }

// interface Admin extends User{
//     admin:boolean;
// }

// function abcd(obj:Admin):void{
//     console.log(obj);
// }

// abcd({ id: "12", name: "Karam", admin: true}); // user and admin are merged together and admin has all the variable of User plus its own variables.



// interface User{
//     id:String,
//     name:string
// }

// interface Admin extends User{
// }

// function abcd(obj:Admin):void{
//     console.log(obj);
// }

// abcd({ id: "12", name: "Karam"}); // If no value will be placed in the admin then it will have only the values of the user.

// interface User{
//     name:string;
// }

// interface User{
//     number:number;
// }
// const person= { name: "Karam", number: 21};
// function abcd(obj:User):void{
//     console.log(obj);
// }
// abcd(person);

// If there are or more interfaces of the same
// name then there properties are merged together
// and one interface is created containing all the 
// values of both interfaces.

// type a = string|boolean;

// function abcd(obj:a):void{
//     console.log(obj);
// }

// abcd(12);// warning
// abcd("hello"); // fine

// type a ={
//     name:string
// }

// type b ={
//     age:number
// }

// let c : a | b ;


// type Person = { name: string };
// type Employee = { employeeId: number };
// type EmployeePerson = Person & Employee;
// let a : Person & Employee ={name: "John", employeeId:122};
// const emp: EmployeePerson = {
//   name: "John",
//   employeeId: 1234
// }; // ✅ Valid
