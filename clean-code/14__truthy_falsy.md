### 참 같은 값 truthy

```
if ('string'.length > 0) {
}

// 'string'.length 가 true

if(!isNaN(10)){
}
===
if(10) {
}

if(boolean) {
}
```

참 같은 값
https://developer.mozilla.org/ko/docs/Glossary/Truthy

### 거짓 같은 값 falsy

https://developer.mozilla.org/ko/docs/Glossary/Falsy


truthy falsy도 부정조건을 잘 탄다.


```
function printName(name) {
  if( name === undefined || name === null) {
    return '사람이 없음';
  }
  
  return '안녕 ' + name + '님';
}

console.log(printName());

```


## truthy || falsy를 사용해서 코드를 바꿔봤다.
- undefined / null

```
function printName(name) {
  if(name) {
    return '사람이 없음';
  }
  
  return '안녕 ' + name + '님';
}

console.log(printName());

```
