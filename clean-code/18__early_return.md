### 빠른 리턴 반환


## 예제 1
```

function loginService(isLogin, user) {

  if(!isLogin) {
    if(!checkToken()) {
      if(!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();
        return '로그인 성공';
      }
    } else {
      throw new Error('No Token')
    }
  }
}

```

- 위 코드의 내용
1. 로그인 여부
2. 토큰존재
3. 기가입유저확인
  1) 가입
  2) 로그인성공

```
function loginService(isLogin, user) {
  if(isLogin) {
    return
  }
  
  if(!checkToken()) {
    return new Error('No Token')
  }
  
  if(!user.nickName) {
    return registerUser(user);
  }
  
  refreshToken();
  
  return '로그인 성공'
  
}
```

## 예제 2

```
function 오늘하루(condition, weather, isJob) {
  if(condition === 'good') {
    study();
    game();
    youtube();
   }
    
  if(weather === 'good') {
    workout();
    laundry();
  }
    
  if(isJob === 'good') {
    working();
  }
  
}
```


- 요런 코드를

```
function 오늘하루(conidition, weather, good) {
  if (condition !== 'good') {
    return
  }
  
  study();
  game();
  youtube();
  
  if(weather !== 'good') {
    return 
  }
    workout();
    laundry();
  
  
  if(isJob !== 'good') {
    return
  }
  
  working()
}
```

