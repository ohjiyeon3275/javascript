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

