<p align="center">
  <img src="assets/id-16.png" alt="Magister Tools Logo">
  <br/><br/>
</p>
<p align="center">
   Create random id's and numbers in base 16!
</p>

## Intro
Use the simple function to quickly generate a random base 16 ([hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)) number or create a generator and then use it to create loads of random numbers of the same length which are checked for collisions. This is useful for creating unique ID's and whatnot.

## Basic usage
Create a random hex number:
```js
var id_16 = require('id-16')
var random = id_16(10)
// e.g. 63f499b6f4
```

Create a generator and use it:
```js
var id_16 = require('id-16')
var id = id_16.generator(4)
user_1 = id()
user_2 = id()
```

## Documentation
All the current fucntions doccumented, any comments? [Open an issue](/issues) or [submit a pullrequest](/pulls)!

### id_16([length])
This function creates a random number in base 16.
**Returns**: A number in base 16.

| param | type | description | 
| --- | --- | ---| 
| lenght | `Number` optional | The desired length of the return number.  *(Default: 8)* |

### id_16.generator([length, expandby])
This function returns a function that creates random base 16 numbers. This generator checks the numbers for collisions. If too many collisions occur an error is thrown or (if expandby is defined) the length of the number is expanded. 
**returns**: The generator

| param | type | description | 
| --- | --- | ---| 
| lenght | `Number` optional | The desired length of the return number.  *(Default: 8)* |
| expandby | `Number` optional | Expand the length of the return number by this number if too many collisions occur.| 


This generator also has some properties and methods: 
#### generator.remove(number)
Removes a number from the list of numbers that have been created by this generator, allowing the number to be created again.

| param | type | description | 
| --- | --- | ---| 
| number | `Number` | The number that you want to delete from the list of already 'used' numbers by **this** generator. |

#### generator.list
An array containing all the numbers that have been created by **this** generator. It's used to check for collisions by the generator itself but it is open to interact with.
