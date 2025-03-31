In this repository, all the practice related the learning of typescript will be placed.

**Important Commands**
- tsc (will compile the all the ts files into the respective js files)
- tsc --watch (works like nodemon automatically make the changes in the respsective js files)
  

## Primitive && Reference data types
- () {} [] these all will be references
- everything else without the above 3 will b e primitives
  
## Advantages and disadvantages of Primitives and References
- You can copy the primitives directly but not the references.

### Array
let a = [1, 2, 3];
// You already know about it from the js it's the same.
### Tuples
**Syntax**
let a : [string, number] = ["karam",22]; 
// In the tuples you can not make changes that are not defined earlier like [string,number] fixed size and fixed dataype is the key of tuple
### Enum
choose from the many options given 
**Syntax**
enum codes{
NotFound = 404,
Error = 500
}
// codes.NotFound will return 404.

## Any => typescipt off 
If type of a variable is not defined then it will be set to "any" by default which will act as same as let a; in js and neither will it through any error. All the purpose of typescript will be gone with this.

## Unknown => first check the type then use the type constraint function on that
```typescript
const a: unknown ;
a ="karam"
//❌
a.toUppercase() // this will throw error until you first check the type of this

//✅ 
if (typeof(a) === String)
{
    a.toUppercase()    // Now this will work perfectly fine.
}
```

## Void => If a function does not returns anything its type should be void else if something is getting returned its type must be set earlier.
```typescript
function foo() :void{
    console.log("hahahha");
}
function bar() :boolean{
    return true;
}
```
## Null => Intentional Absence of Value 
When you want to have no value in a variable or clear the previous value.
```typescript
let a :string | null; // constrains the search to only give string and nothing else.
a="karam";
a=null;
a=21; // error
```

## Undefined => Unintentional absence of value
When a property is not present means the variable is declared but a value is not assigned to it.

```typescript
let x; 
console.log(x); // undefined

function test() {}
console.log(test()); // undefined

let obj = {};
console.log(obj.prop); // undefined

```

## Never 
This type is used to indicate that this function will not let the code ahead to execute like an indicating an infinite loop or something like that. 

```typescript
function abcd():never{
    while(1);
}
abcd();
console.log("anything"); // the color of it will be faded indicating abcd will never stop and this line will never execute.
```

## Type Inference
Without mentioning type when typescript automatically inferences the type of the variable, this phenomenon is called as the type inference.
```typescript
let a = 12; // hover over the a let a:number will be showing up 
// typescript automatically inferred the type of the variable.
```

## Type Annotations
Explicitly mentioning the type of the variable is simply called as the type annotation.
We can also combiner properties by using the OR operator.(number|string)

```typescript
let b:number = 12; 
```

We can even annotate the type of the variables and the return type of the function altogether. Like this 
```typescript
function foo(a:number,b:string):void 
{
    // type of param 1 is number
    // type of param 2 is string
    // as the return type is void nothing will be returned.
}
```

---

# Interfaces and Type Aliases

### 1. Interfaces
Interfaces are like defining classes in the javascript. Which defines the shape of a variable.
```typescript
interface User{
    id: number;
    name: string;
    age: number;
    email: string;
    gender?: string; // optional
}

const abcd = (obj:User):void =>{
console.log(obj);
}
// Both below will work just fine.
abcd({ id:12, name: "Karam", age:21, email: "k@m.com"});
abcd({ id:12, name: "Karam", age:21, email: "k@m.com",gender:"M"});
```
- Extended Interfaces
```typescript

interface User{
    id:String,
    name:string
}

interface Admin extends User{
    admin:boolean;
}

function abcd(obj:Admin):void{
    console.log(obj);
}

abcd({ id: "12", name: "Karam", admin: true}); 
// user and admin are merged together 
// and admin has all the variable of User 
// plus its own variables.
```
- Empty extended interface
```typescript

interface User{
    id:String,
    name:string
}

interface Admin extends User{
}

function abcd(obj:Admin):void{
    console.log(obj);
}

abcd({ id: "12", name: "Karam"}); 
// If no value will be placed in the 
// admin then it will have only the values of the user.
```
- Interfaces of the same name.
```typescript

interface User{
    name:string;
}

interface User{
    number:number;
}
const person: User = { name: "Karam", number: 21};
function abcd(obj:User):void{
    console.log(obj);
}
// If there are or more interfaces of the same
// name then there properties are merged together
// and one interface is created containing all the 
// values of both interfaces.,
```

### 2. Type Aliases

