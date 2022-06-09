<img width="448" alt="Screen Shot 2022-06-09 at 10 59 24 PM" src="https://user-images.githubusercontent.com/75511229/172865342-fcb6378e-8056-478a-970e-40595724ebd9.png">


### undefined vs null

- null
```
!null  // true

!!null -> !!연산자는 값을 boolean으로 형변환 // false

null === false // false
!null === true // true

null + 123 // 123  null in math => 0


```

- undefined

```
let varb = null

typeof varb  // object

undefined + 10 // NaN

!undefined  // true

undefined === null // false

!undefined === !null // true

typeof undefined // undefined
```

- 스스로 컨벤션을 만드는 것이 좋다.
- undefined, null => 값이 없거나 정의되지않은 명시적인 표현
