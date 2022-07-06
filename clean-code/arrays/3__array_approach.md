### 배열 요소에 접근하기

- 배열요소 == element

```
const array = [1, 2, 3]

function operateTime(input, operator, is) {
  inputs[0].split('').forEach( (num) => {
    ...  
  })
  
  
  input[1].split('').forEach( (num) => {
    ...
  })
}
```

- split 은 string을 받아서 여러개로 나눔


```
function ff() {
const [firstInput, secontInput] = inputs
const [dddState, setDddState] = useState()..

  firstInput.split('').forEach((num) => {
  
  })
  
  secondInput.split('').forEach((num) => {
  
  }
}

operateTime([1, 2], 1, 2)

```

```
function click() {
  const firstBtn = document.getElementByTagName('button')
  const secondBtn = document.getElementByTagName('button')
  const thridBtn = document.getElementByTagName('button')

}
```

위와 같은 코드를

```
function click() {
  const [firstBtn, secondBtn, thirdBtn] = document.getElementByTagName('button')
}
```
로 바꿀 수 있음.


- 배열 요소에 접근하기

```
function formatDate(input) {
  const date = targetDate.toISOString().spring('T')[0];
  
  const[ year, month, day] = date.split('-');
  return `${year} ${month} ${day}`
}
```

- lodash







