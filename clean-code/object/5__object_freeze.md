### object freeze

- 객체를 동결한다.

```
const STATUS = {
  PENDING : 'PENDING',
  SUCCESS : 'SUCCESS',
  FAIL : 'FAIL'
}



const STATUS = Object.freeze{
  PENDING : 'PENDING',
  SUCCESS : 'SUCCESS',
  FAIL : 'FAIL'
}

STATUS.PENDING = 'Penguin2';
console.log(STATUS.PENDING) // PENDING
```

- 진짜 동결되었는지 확인

`Object.isFrozen(STATUS.FAIL)` // true

- shallow copy vs deep copy 개념과 비슷하게 
- depth가 한번이상 들어간 객체는 freeze되지 안흔다.

-> deepFreeze를 사용.
