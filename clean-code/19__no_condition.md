### 부정 조건문 지양하기

- NaN

- 만약 숫자일때만 작동한다는 로직을 작성한다면
```
if(isNaN(3)) {
  
}
```
// 위와같은 코드는 이해하기 직관적이지 않다.

```
function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number'
}
```
// 위와 같이 힘수를 만들어 쓰는게 

- 부정조건문을 반대하게되는 이유
1. 생각을 여러번 해야할 수 있다.



2. 어차피 프로그래밍 언어자체로 if문이 처음부터 온다.

```
if (isCondition) {
  console.log(' 참참')
} else {
  console.log('거짓거짓')
}
```

early return 이나 유효성검증, 보안, 검사로직을 사용할 때는 부정조건을 사용 할 수 있음.
실수할 가능성이 크기 때문에 명시적으로 작성하는게 (부정조건을 지양하는 것이) 좋음.



