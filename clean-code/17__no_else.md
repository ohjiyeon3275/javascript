### else 피하기

```

function getActiveUserName(user) {
  if(user.name) {
    return user.name
  } else {
    return '이름 없음'
  }
}

를

function getActiveUserName(user) {
  if(user.name) {
    return user.name
  } 
  return '이름 없음'
}

요렇게 바꿔도 된다.

```

- age가 20미만시 특수 함수 실행

```
function getHelloCustomer(user) {
  if(user.age < 20) {
    report(user)
  }
  
  return '안녕하세요'
}
```
조건문에 걸리더라도 '안녕하세요'는 출력되도록함.
