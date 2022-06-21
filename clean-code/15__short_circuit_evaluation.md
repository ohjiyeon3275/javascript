### 단축평가



```
AND

true && true && '도달 O' // 도달 O

true && false && '도달 X' // false

------

OR

false || false || '도달 O' // 도달 O

true || true || '도달 X' // true

```

- case 1

```
function fetchData() {
<!--   if(state.data) {
    return state.data;
  } else {
    return 'Fetching...'
  } -->
  
  // 위의 조건문은 아래와 같이 사용가능
  
  return state.data || 'Fetching...'
}
```

- case 2

```
function favoriteDog(someDog) {
  let favoriteDog;
  if(someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = '냐옹'
  }
  
  return favoriteDog + '입니다.'
}

favoriteDog() // 냐옹
favoriteDog('포메') // -> 강아지입니다.

function favoriteDog(someDog) {
  
  return (someDog || '냐옹') + '입니다.'
}
```


- case 3

```
const getActiveUserName (user, isLogin) {
  if(isLogin) {
    if(user) {
      if( user.name) {
        return user.name
      } else {
        return '이름없음'
      }
    }
  }
}


==> 
const getActiveUserName(user, isLogin) {
  if(isLogin&& user) {
    if(user.name) {
      return user.name || '이름없음'
    }
  }
}
```
