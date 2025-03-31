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

## Never => This type is used to indicate that this function will not let the code ahead to execute like an indicating an infinite loop or something like that. 

```typescript
function abcd():never{
    while(1);
}
abcd();
console.log("anything"); // the color of it will be faded indicating abcd will never stop and this line will never execute.
```



