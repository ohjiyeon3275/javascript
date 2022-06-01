# 전역공간 사용을 최소화하라.

## 전역공간이란?

- window가 최상위인 경우
  - 브라우저환경에서 돌아가는 경우
- global이 최상위인 경우
  - NodeJS환경에서

```
console.log(window); // 크롬 개발자 도구에서 찍어보면 됨
console.log(global);
```

 ### 전역공간이란 ? === 최상위 ( 1. 브라우저 2. NodeJS)

- index.js 와 index2.js에서 각각 작업중일 때 문제점 : scope가 안나뉨.
  - index.js
```
var globalVar = 'global';
```
  - index2.js
```
console.log(globalVar);
```

- setTimeout이라는 변수를 만들어 테스트하면 작동하지 않는다.
- 개입 x 콘솔 에러 x : 브라우저 웹 api이기 때문임
  - index.js
```
var globalVar = 'global';

console.log(globalVar);

var setTimeout = 'setTimeout';

function setTimeout() {
  console.log('function')
}
```
  - index2.js
```
setTimeout(() => {
  console.log('1초');
}, 1000);
```

## var -> let & const (var지양하자는 이미 나온얘기)
```
const array = [10, 20, 30];

for(***var*** index = 0 ; index < array.length; index ++) {
  const element = array[index]
}
```

## window 공간
- setTimeout에서도 접근이 가능하다는 문제점
- IIFE, Module, Closure에 대해 알아두기.
  - index.js 
```
window.foo = 'bar';
```

  - index2.js
```
console.log(window.foo);
```

> 전역공간을 더럽히지 않기
> 이유 : 어디서나 접근 가능하지만 런타임환경에서는 분리되어 있지 않을 수 있다.
> 스코프 분리 위험하다.
> 해결방법
>> 1. 전역변수는 애초에 만들지 않는 방법
>> 2. 지역변수를 사용한다.
>> 3. window.global을 조작하지 않는다.
>> 4. const, let으로 바꾸면 많은부분 해결 가능
>> 5. IIFE, Module, Clousure 스코프를 나누기
