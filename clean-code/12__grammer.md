### JSX

```
// JSX
ReactDOM.render(
  <div id="msg"> hello world! </div> // jsx 
  mountNode // node
)

// 바벨을 만나면 transfiling 이 됨.
ReactDOM.render(React.createElement('div', { id : 'msg' }, 'Hello world'), )

```

- <div id="msg">gngn </div>


- if문을 값으로 넣으면 당연히 동작하지 않음
```
// JSX
<div id={if(condition) { 'msg' }}> hello world </div>

const obj = { id : if(condition) { 'msg' }}
```
- but 삼항연산자는 됨
```
// JSX
<div id={ condition ? 'msg' : null }> dkdk </div>

```

- 그리고 switch case문도 가능

```
<p>
{
  ( 
  () => {
    switch(this.state.color) {
      case 'red' :
        return '빨강';
      case 'blue :
        return '블루';
    }
  }

}
</p>
```

- {} 안에 값과 식만 들어가게 한다.

```
{
  objectRow.map((obj) => {
    <ObjectRow key={} data={} />
  })
}
```

- 즉시실행함수
```
{conditionOne && <span>One</span>}
```

- jsx의 syntatic sugar
