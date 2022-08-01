### 인자 vs 매개변수


- parameter : names listed in functions definition.
- argument : real values passed to the function.

```
// 형식을 갖춘 매개변수

function axios(url) {
  //some code
}

// 실제로 사용되는 인자
axios('https://github.com');

```

- 복잡한 인자 관리하기

```
function toggleDisplay(isToggle) {

}

function sum(sum1, sum2) {

}

function getRandomNumber(min, max) {

}

function timer(start, stop, end) {

}

function getSquare(top, right, bottom, left) {

}

function createCar(name, brand, color, type) {
  return (
    name,
    brand,
    color,
    type
   )
}

--> 

function createCar(options) {
  var name = options.name
  var brand = options.brand
  var color = options.color
  var type = options.type

  return {
    name,
    brand,
    color,
    type
  }
}

createCar({
  name = 'name'
  brand = 'brand'
  color = 'color'
  type = 'type'
});

-->

function createCar( brand, {name, type}) {
  
  return {
    name,
    brand,
    type
  }
}

```
