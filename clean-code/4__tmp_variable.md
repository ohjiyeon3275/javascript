### 임시변수란 ?
- 특정공간(scope)안에서 전역변수처럼 활용됨

## 예시 1
```
function getElements() {
  const result = {}; // 임시 객체를 만듬
  
  // .연산자로 무언가를 계속 끼워넣음
  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');
  
  return result;
}
```

- 개선코드 
```
function getElements() {
  const result = {
    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');
  }
  
  return result;
}
```
- 바로 리턴에 적용도 가능
```
function getElements() {
  return {
    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');
  }
  
}
```

- 임시 변수가 생기는 순간 계속해서 뭔가 만들고 넣고 지우게 된다. (CRUD)


## 예시 2

```
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();
  
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  
  return {
    month, day, hour
  }
  
}
```

날짜관련 추가 스펙이 생길때 
1. 함수추가
2. 위 함수 추가

-> 바꿔서 사용한다고 하면 꼼꼼히 확인 필요하기 때문에 바로 리턴으로 넣어주는게 확실하게 할 수 있다.
- let을 사용한다고 하면 수정&재할당이 가능하다는 뜻이기 때문에 const로ㅂㅏ꿔서 사용해본다.

- 개선코드

```
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();
  
  return {
    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;  
  }
}
```



