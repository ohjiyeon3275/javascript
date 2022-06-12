### eqeq (==) 줄이기

```
const ticketNum=$('#ticketNum')
```

### strict equality (===) 
엄격한 동등연산자

```
'1' == 1 //true
1 == true //true
```
- 동등연산자를 이용하면 type casting이 일어난다.

```
'1' === 1
1 === true
```
- 느슨한 동등연산자 
```ticketNum.value == 0 ``` // true
```Num(ticketNum.value) === 0 ``` // true
```ticketNum.valueAsNumber === 0 ``` // true

https://eslint.org/docs/rules/eqeqeq


이렇기 때문에 느슨한 검사를 하면 안된다. 휴먼에러를 줄인다.
https://dorey.github.io/JavaScript-Equality-Table/

```
'1' == 1 // 느슨한 검사(사람관점) -> but 암묵적인 형번환이 이뤄짐
1 == true //true
0 == false //true
```
- 

```
11 + '문자와 결합' // '11 문자와 결합'

!!'문자열' // true
!!'' // false

parseInt('9.999', 10); // 9ㅣ
```

- parseInt를 사용시 10진수가 기본이라고 생각하기 쉽지만 안쓰면 10진수가 디폴트는 아니다.
- JS에서 암묵적인 형변환이 있을때 명시적으로 해줄 필요가 있다.


