### 함수, 메서드, 생성자


```
function func() {
  method() { // concise method
    return this;
  }
}

function Func() {
  return this;
}

func()


```

자바스크립트의 함수는 1급객체
- 변수나, 데이터에 담길 수 있다.
- 매개변수로 전달 가능
- 함수가 함수를 전달


=> 메서드 : 객체에 의존성이 있는 함수

=> function Func() {
  return this;
}
