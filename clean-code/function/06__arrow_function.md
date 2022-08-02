### arrow function

- 화살표함수에 대한 사용이 늘고있음.
- 특히 리액트를 사용하면 더 그럼.


```
const user = {

  name : 'poco',
  getName : () => {
    return this.name;
  },
}

user.getName(); // undefined 

```

- this 의 차이

```
const user = {

  name : 'poco',
  getName () {
    return this.name;
  },
}

user.getName(); // 잘 호출됨 ('poco') 

```

화살표함수는 렉시컬 스코프를 가지게 됨.
메소드에서 This를 사용할때에는 주의할 필요가 있음..
- argument나 call 할때도 화살표함수를 사용하기 힘들 수 있음.
- 화살표함수는 생성자로 사용할 수 없다.
```

const Person = (name, city) => {
  this.name = name;
  this.city = city;
}
```

