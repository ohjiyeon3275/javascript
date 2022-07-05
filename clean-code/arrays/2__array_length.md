### array length


```
const arr = [1, 2, 3]

if(arr.length > 1) {
  //로직

}
arr.length > 10 && ar.map( (el) => <some>{el}</some>


arr.length = 10
console.log(arr.length) // 10

이렇게 바로 length를 바로 선언해주면
arr [1, 2, 3, , , , , , ,..]

```
length는 배열의 길이보다 마지막인덱스에 가깝다
```
const arr = [1, 2, 3]
arr[3] = 4

console.log(arr.length);

arr[9] = 10

arr [ 1, 2, 3, 4... , 10]

console.log(arr.length) // 10

```

- 마지막 인덱스를 알려주는 것

```
arrary.prototype.clear = function() {
  this.length = 0
}

function clearArray(array) {
  array.length = 0;
  return array
}

const arr = [1, 2, 3]

console.log(clearArray(arr)) // []

```
마지막 인덱스를 호출하는 것에 더 가꺼우니 의식적으로 실수를 줄이도록하자

