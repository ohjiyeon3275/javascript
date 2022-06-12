### isNaN

```
Number.MAX_SAFE_INTEGER
NUMBER.isInteger
```

- isInteger를 활용한 검사방법
  - typeof 123
  - isNaN

```
isNaN(123) // false : 123이 숫자가 아닌게 아니다. => 숫자가 맞다

isNaN(123 + '테스트') // true
Number.isNaN(123 + '테스트') // false

```

- ES2015
  - isNaN // 느슨한 검사
  - Number.isNaN // 엄격한 검사

> Boolean.TRUE 요런 느낌일까?
