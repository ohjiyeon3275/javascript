### default value

```
function createCarousel(options) {

  options = options || {};
  var margin = options.margin || 0;
  var center = options.center || false;
  var navElement = options.navElement || 'div';
  
  return {
    margin,
    center,
    navElement,
  }
}

undefined.
createCarousel();

```

- || 로 기본값을 세팅해줘서 undefined를 방지할 수 있다.


```
function createCarousel({
  margin = 0,
  center = false,
  navElement = 'div',
} = {} // 여기서 객체 기본값
) {
  return {
    margin,
    center,
    navElement
  }
}

createCarousel(undefined)

```

- 파라미터에서 객체 디폴트 값 설정하기

```
const required = (argName) => {
  throw new Error('required is ' + argName);
}


function createCarousel{(
  items = required('items'),
  margin = 0,
} = {}) {
  
  return {
  
  }
 
}
  
```
- 인자가 들어오지 않으면 undefined로 취급되고 

default parameter 를 사용해서 깰끔한 유지보수 가능
