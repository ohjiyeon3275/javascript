### typeof 연산자
```
typeof '문자열'  // 'string'
typeof true // 'boolean'
typeof (123)  // 'number'

function myFunction() {}
typeof myFunctin  // 'function'

class MyClass {}
typeof MyClass  // 'function'

const str = new String('문자열')
typeof str  // 'object'

typeof null // 'object' -> 오류... 언어적 오류...

```

- 이렇게 타입검사의 결과값을 문자열로 반환한다.
- () 안에 함수처럼 사용가능

### primitive vs reference
- 자료형
- 동적으로 변하는 언어 => 타입 동적


### instanceof 타입
- 일종의 연산자
- 객체의 프로토타입체인을 검사
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const tony = new Person('Tony', 35)
const kate = {
  name : 'kate',
  age : 29
 }

tony instanceof Person // true
kate instanceof Person // false
```

-  object instanceof
```
const arr = []
const func = function() {}
const date = new Date()

arr instanceof Object // true
func instanceof Object // true
date instanceof Object // true

-> Object.prototype.toString.call(new String('wrapper도 감지함'))

```

- 타입검사할때 구글링해서 stackoverflow에서 찾아보는것 추천 + ***최신검색*** 활용
- js라는건 헷갈림을 주는 언어. --> 항상 검색을 습관화


## 요약
- 자바스크립트는 동적타입언어 : 타입검사가 어렵다.
- 하나하나 잘 찾아서 검색! 일일히 외우는것은 힘들다.
- typeof가 primitive와 reference에 모두 적용되지 않을수 있다. ->  instanceof를 써보자

