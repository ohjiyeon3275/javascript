### 숏코딩


## case 1

```
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4
}

vs

function example() {
  if(condition1) {
    return value1
  } else if (condition2) {
    return value2
  } else if (condition3) {
    return value3
  } else {
    return value4
  }
}

```

- 차라리 switch case문은 ?

```
const tmp = condition1; condition2; condition3;

switch (key) {
  case value :
    break;
    
  default :
    break;
}
```



## case 2

```
const example = condition1
  ? a === 0 
    ? 'zero'
    : 'positive'
  : 'negative'


// 사람을 위한 코드 (읽기 좋은)
const example = condition1
  ? (a === 0 ? 'zero' : 'positive')
  : 'negative'
 
```
  
## case3

```
// nullable한 상황에서 유용하게 사용가능.
const welcomMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';
  
  return `안녕하세요 ${name}`
}


const welcomMessage = (isLogin) => {
  
  if(isLogin) {
    return `안녕하세요 ${getName()}`'
  }
  return `안녕하세요 이름없음`
}

```

## case4

```
function alertMessage(isAdult) {
  isAdult
    ? alert('입장가능')
    : alert('입장x')
    
   if(idAdult) {
    alert('aaa')
   } else {
    alert('bbb')
   }
}

숏코딩 위의 경우는 아래와 같이 바꿔서 써도 된다.
```

- 삼항연산자는 주로 값을 리턴할 때 쓴다.


