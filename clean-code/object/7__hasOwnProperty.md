### hasOwnProperty

- 기본형태
```
const person = {
  name : 'jiyeon'
}

person.hasOwnProperty('name') // true
person.hasOwnProperty('age') // false

```

- for in문에서 주로 활용함

```
const foo = {
  hasOwnProperty : function() {
    return 'hasOwnPropetry';
  },
  bar: 'string',
}

foo.hasOwnProperty('bar') // hasOwnProperty
Object.prototype.hasOwnproperty.call(foo 'bar') // true
```

- Object.prototype.hasOwnProperty.call(foo, 'bar'))
프로토타입에서 가져오기때문에 다른 프로퍼티의 내용을 가져올 수도있다.
- 자바스크립트의 이슈임(let, const같은)
```
const foo = {
  hasOwnProperty :function () {
    return 'hasOwnProperty';
  }
  bar: 'string'
}

function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(
    targetObj,
    targetProp,
  )
}

const person = {
  name: 'jiyeon'
}

hasOwnProp(foo, 'hasOwnProperty') //true

```
