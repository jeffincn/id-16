<p align="center">
  <img src="assets/id-16.png" alt="Magister Tools Logo">
  <br/><br/>
</p>
<p align="center">
   Create random id's and numbers in base 16!
</p>

## intro
Use the simple function to quickly generate a random base 16 ([hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)) number or create a generator and then use it to create loads of random numbers of the same length which are checked for collisions. This is useful for creating unique ID's and whatnot.

## basic usage
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
