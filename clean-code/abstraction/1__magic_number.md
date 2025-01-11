### magic number
코드에서 하드 코딩된(literal value) 일정한 값을 의미하는 숫자나 문자열 등을 의미

```
const DEALY_MS = 3*60*1000 // upper snake case 

setTimeout(() => {
  scrollToTop();
}, DELAY_MS)
```

```
const PRICE = {
  MIN: 1000000,
  MAXL 1000000000,
}
// 읽기 어려움

const PRICE = {
  MIN: 1_000_000,
  MAXL 1_000_000_000,
}
// _operator사용, 실제 숫자 사용시 _ 자동생략됨 - 숫자로 사용가능
```
적절한 숨김을 통해서 매직넘버를 사용
사용시 `PRICE.MIN`

```
function isValidName(name){
  return carName.length >= 1 && carName <= 5;
} // 1, 5가 하드코딩되어있음

const CAR_NAME_LEN = Object.freeze({
  MIN: 1,
  MAX: 5,
})
// 정책이 바뀌면 값만 바꿔주면 됨
```

