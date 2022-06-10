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
