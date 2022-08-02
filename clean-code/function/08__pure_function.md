### 순수함수


- redux : js앱을 예측가능하게 만들어주는 컨테이너
  - 핵심원리 중 : reducer => 순수함수를 사용해야한다.는 말이 나옴

- 비순수함수
```
let num1 = 10;
let num2 = 20;

function impureSum1() {
  return num1 + num2;
}

function impureSum2(newNum) {
  return num1 + newNum;
}

impureSum1(); // 30

num = 30;
// 외부에서 값을 조작할 수 있기때문에 (let변수를 사용해서)
// Impure 함

impureSum1();
impureSum1();
impureSum1();

```

- let값이 보장이 안되는 문제가 있음



- 순수함수

```
function pureSum(num1, num2) {
  return num1 + num2;
}

pureSum(10, 20);
pureSum(10, 20);

...

```
동일한 값에 동일한 출력을 나타냄

-

```
function changeValue(num) {
  num++
  return num
}

changeValue(1);
changeValue(3);
changeValue(4);

```

- 객체로 테스트

```
const obj = {one: 1};

function changeObj(targetObj) {
  targetObj.one = 100;
  
  return targetObj;
}

changeObj(obj); {one : 100}


```
## 객체, 배열 => 새롭게 만들어서 반환하는게 좋음

```
function changeOgj(targetObj) {
  return {...targetObj, one: 100};
}

changeObj(obj); // { one : 100 }
```

- 생각대로 동작하지 않는경우가 많음
- 동일한 인풋에 동일한 아웃풋을 만들어낼수있는 함수(순수함수)를 항상 고려하기



- privitive type vs reference type

