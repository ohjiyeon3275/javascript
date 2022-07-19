### 구조분해할당

- undefined 로 선언해주어야 할 때
```
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const poco = new Person('poco', 30, 'korea')
const poco = new Person('poco', undefined, 'korea')

```

- 구조분해할당을 쓰면 좋은점
  - 순서 상관없이 생성자
  - 값 안넣어도 됨(디폴트값 만들어주면)
```
function Person({name, age, location}) {
  this.name = name;
  this.age = age ?? 34;
  this.location = location;
}

const poco = new Person({location:'korea', name:'poco'})

```

- 라이브러리에서 옵션을 다루는 경우
```
function Person(name, {age, location} ) {
  this.name = name;
  this.age = age ?? 34;
  this.location = location;
}

const poco = new Person(
  'poco',
  {location:'korea'}
)

```
- 첫번째 인자부터는 필수 그다음은 옵션



- 이런방법을 자꾸 할당하다보면 길어져서 
```
const { 0: st2, 2: rd2} = orders

console.log(st2)
console.log(rd2)
```

- 요런 방법도 있다. (빈칸)
```
const orders = ['First', 'Second', 'Third'];

const st = orders[0];
const rd = orders[2];

const [first,  , third] = orders
```

- 리액트에서 props를

```
function hi(props) {
  return <h1>{props.name}</h1>
}


function hi({name}) {
  return <h1>{name}</h1>
}
```
