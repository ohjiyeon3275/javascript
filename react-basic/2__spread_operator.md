### 전개 연산자

- 배열
```
var array1 = ['one', 'two']
var array2 = ['three', 'four']
combined = [...array1, ...array2]
```
- 객체
```
var obj1 = { one : 1, two : 2 }
var obj2 = { three : 3, four : 4 }
var combined = { ...obj2, ...obj1} // -> 순서 자동 정렬됨
var { other, ...others} = combined // -> others = { ㅐ
```
