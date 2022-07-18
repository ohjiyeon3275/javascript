### look up table

- key-value 문법을 사용
- 엑셀의 vlookup


```
function getUserType(type) {
  if(type === 'admin') {
    return '관리자'
  } else if(type === 'student') {
    return '수강생'
  } else if(type === 'instructor') {
    return '강사'
  }
} 
```
- 요렇게 계속 조건이 늘어날때마다 코드가 늘어질 수 있다.

그럴때 switch case를 사용 가능

```
function getUserType(type) {
  switch(key) {
    case 'admin' :
      return '관리자'
    ...
    default:
      return '해당 없음'
  }
}
```

- object lookup table

```
function getUserType(type) {
  const USER_TYPe = {
    ADMIN : '관리자',
    INSTRUCTOR : '강사',
    STUDENT : '수강셍'
    UNDEFINED : '해당 없음'
  }
  
  return USER+TYPE[type] ?? '해당 없음';
 
  return USER+TYPE[type] ?? USER_TYPE[UNDEFINED]
}

getUserType('111')
```

- closer 활용 가능

```

function getUserType(type) {
  return (
    {
      ADMIN : '관리자',
      INSTRUCTOR : '강사',
      STUDENT : '수강생
    }[type] ?? '해당없음'
  )
}

```


혹은 USER_TYPE을 다른데서 import해서 써도 됨

```
import USER_TYPE from '../../~~~'

function getUserType(type) {
  return USER_TYPE[type] || USER_TYPE.UN;
}
```
