### 널 병합 연산자

```
function createElement(type, height, width) {
  const element = document.createElement(type || 'div');
  
  element.style.height = String( height || 10) + 'px';
  element.style.width = String(width || 10) + 'px';
  
  return element
}

const el = createElement('div', 0, 0);
일 경우 
```

el.style.width --> 10px 이 나타난다

!!0 -> False일 수 있다.

0 || '10'

0이 falsy로 귀결되기 때문에 논리적 평가를 할 때 주의해야한다.


--> 해결 --> ??

```
function createElement(type, height, width) {
  const element = document.createElement(type ?? 'div');
  
  element.style.height = String(height ?? 10) + 'px';
  element.style.width = String(width ?? 10) + 'px';
  
  return element;
}
```

0을 할당하고싶었을때 false가 아닌 0으로 잘 들어감.

- null과 undefined를 확인하고자 할 때만 사용해야한다.

```
function helloWorld(message) {

  if(!message) {
    return 'hello world!';
  }
  
  return 'hello ' + (message ?? 'world')
}

function helloworld(message) {
  return 'hello' + (message || 'world');
}

console.log(helloWorld(0)); // Hello! World

```

- || 연산자를 사용하면 되는데 ??를 사용하게 될 수도 있다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining


```

console.log(null || undefined ?? 'foo')
// expression cannot be mixed.

function getUserName() {

}
```


|| 연산자는 ```연산자우선순위```에서 꽤 낮은 편

널병합연산자도 낮은편

우선순위를 명시적으로 사람이 알아볼 수 있게 해야함

실수를 

널 병합 연산자는 ```?.``` -> 옵셔널 체이닝과 궁합이 좋다.

