# var을 사용하는 대신 let && const를 사용하자.

- var : 함수 스코프
- let & const : 블록 스코프 (TDZ)


## var

```
console.log(name) // undefined
var name = '이름';
```

재할당, 중복선언을 계속할 수 있다.

## let
```
let name = '이름'
name = '이름2';
name = '이름3';
```
재할당 가능.

## const

```
const name = '이름'
name = '이름2'; // error
```
재할당 불가능
