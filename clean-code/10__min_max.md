### 경계 다루기


```
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// 성인인지 확인하는 함수

const MAX_AGE = 20

function isAdult(age) {
  // 최소값, 최대값(포함되는지, 안되는지)
  // 이상, 초과 vs 이하, 미만 --> 확실하게 정해서 경계를 정해줘야함.
  if(age >= 20) {
    
  }
}

const MIN_NUMBER_LIMIT = 1;
const MAX_NUMBER_LIMIT = 45;

getRandomNumber(MIN_NUMBER, MAX_NUMBER);
```

- 경계 다루기 (min-max)
  1. 최소값과 최대값을 다룬다.
  2. 최소값과 최대값 포함 여부를 결정해야 한다. (이상-초과 / 이하-미만)
  3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다.
  
-> 의식적인 코드 작성.. **
