### 유사 배열 객체

```

const arrayLikeObject = {
  0 : 'Hello',
  1 : 'World',
  length : 2,
}


const arr = Array.from(arrayLikeObject)

console.log(arr) // [ 'Hello', 'World' ]
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(arrayLikeObject)); //false
console.log(arr.length) // 2

```

- 키 && 값 -> 쌍 
- 자바스크립트 배열은 객체다

```
function generatePrice() {
  
  for(let i = 0; i < array.length ; i ++ ) {
    const element = arguments[index]
    
    console.lg(Array.isArray(arguments)) // false, false, ...
    
    console.log(element) // 100, 200, 300, ...
  
  }
  
  Map, forEach, reduce, filter, every, some... 
  
  return arguments.map((arg) => arg + '원');
}

generatePrice(100, 200, 300, ... );

```

- arguments

```
function generatePrice() {
  console.log(arguments);
}

generatePrice(100, 200, 300, 400);
```
- for문으로 배열같은 객체를 순환했음

