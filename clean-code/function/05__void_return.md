### void, return

```
function handleClick() {
  return setState(false)
}

function showAlert(message) {
  return alert(message)
}
```

- setState나 alert는 리턴값이 아니라서 `return`을 사용하지 않아도된다.

```
function test(sum1, sum2) {
  const result = sum1 + sum2

}

test(1, 2) // undefined


function testVoidFunc(sum1, sum2) {
  const result = sum1 + sum2
  return test(1, 2)
}

test(1, 2) // undefined

testVoidFunc() //리턴이 없는 함수를 리턴
// undefined

```

- html에서사용할 떄

```
<a href="javascript:void(0);">
  클릭해도 아무 일 없음
</a>

<a href="javascript:void(document.body.style.backgroundColor='green')
  클릭하면 배경 green
</a>
```

- 반환값으로 다른 값으로 활용도 가능

```
function textFunc() {

  return arrPush(1, 2)
}

var getText = textFunc()

```

