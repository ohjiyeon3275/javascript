### 자바스크립트의 배열은 객체다

```
const arr = [1, 2, 3]

arr[3] = 'test'
arr['property'] = 'string value';
arr['obj'] = {}
arr[{}] = [1, 2, 3]
arr['func'] = function () {
  return 'hello';
}

for(let i = 0; i < arr.length ; i ++ ) {
  console.log(arr[i])
} // 이 식은 결국

let i = 0;
if(i < arr.length) {
  i++
} // 요런느낌
```

콘솔 찍어보면 숫자만 나오고있다.
let i 는 블록스코프에 해당하기때문에 


```
const obj = {
  arr: [1, 2, 3],
  3: 'test',
  property :'string value',
  obj : {},
  '{}' : [1, 2, 3],
  func : function () {
    return 'hello'
  }
}
```
자바스크립트의 배열은 이러한 코드와 같다.

```console.log(arr.func())``` --> hello

```
const arr = [1, 2, 3]
const obj = {
  0: 1, 
  1: 2,
  2: 3
}

arr ==> obj
```
