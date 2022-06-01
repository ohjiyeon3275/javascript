# scope

## var는 함수단위 scope


```
var global = '전역';

if(global === '전역') {
  var global = '지역'
  console.log(global); // 지역
}

console.log(global); // 지역
```

## let or const

```
let (or const) global = '전역';

if(global === '전역') {
  var global = '지역'
  console.log(global); // 지역
}

console.log(global); // 전역 **
```

## 블록  
```
{

}
```


## 객체의 재할당

### 불가
```
const person = {
  name: 'oh',
  age: '29'
}

person = {
  name = 'ohoh',
  age = '30'
}
```

### 가능
```
const person = {
  name: 'oh',
  age: '29'
}

person.name = 'ohoh';
person.age = '30;
```
- person을 재할당한것이 아닌 안의 값을 재할당해서 가능하다


## 배열의 재할당

### 가능
```
const person = [{
  name: 'oh',
  age: '29'
}]

person.push({
  name = 'ohoh',
  age = '30'
})
```

- const는 **재할당**만 금지된다.
- 객체, 배열 조작은 가능

