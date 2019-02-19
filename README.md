# Enums

> enums done right

## Usage

```javascript
const enums = require('@fega/enums')


const myEnum = enums('DOG','CAT','RAT')

console.log(myEnum.DOG) // prints "DOG"

console.log(Object.keys(myEnum)) // prints ["DOG","CAT","RAT"]

console.log(myEnum.DRAGON) // WILL throw an error

myEnum.DRAGON='please no' //Will throw an error
```

## license

MIT
