### 호이스팅

- 선언과 할당이 분리된것 : 언제? 런타임시(동작할 떄)
```
function duplicatiedVar() {
  var a;
  console.log(a); //undefined
  
  var a = 100;
  console.log(a); //100
}

console.log(duplicatedVar()); // undefined;
```

- var 중복선언가능하기 때문에 선언만하면 undefined;

```
var sum;

console.log(typeof sum) //function => 함수도 호이스팅된다.

sum = function() {
  return 1+2;
}

console.log(sum());
```

- function => 함수도 호이스팅된다.
- 함수를 만들때는 const사용 권장
- (사람이 실수하는 여지를 줄임)


## 호이스팅 : 런타임시에 바로 선언을 최상단으로 끌어올림
> 코드를 작성할때 예측하지 못한 실행결과가 노출 될 수 잇다.

- 이러한 현상을 예방하기 위해 var 을  지양함.
- 함수 조심 -> 함수 표현식 사용


