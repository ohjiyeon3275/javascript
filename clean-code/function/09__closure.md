### closure

```
function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  }
}

const addOne = add(1);
const addTwo = add(2);

addOne(3)
```


```

function sum(num1, num2) {

}

function multiple(num1, num2) {

}

const addOne = add(5, 2);
const sumAdd = addOne(sum);
const sumMultiple = 
```

- closure

```
const arr = [1, 2, 3, 'A', 'B', 'C'];

function isTypeOf(type) {
  return function(value) {
    return typeof value === type;
  }
}

const isNumber = isTypeOf('number');
const isString = isTypeOb('string');

arr.filter(isNumber);
arr.filter(isString);

```

- closure 예시 2

```
function fetcher(entpoint) {
  return (url, options) {
    return fetch(endpoint + url, options)
    .then((res) => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res.error);
      }
      })
      .catch((err) => console.error(err));
    }
  }
}

const naverApi = fetcher('http://naver.com');
const daumApi = fetcher('http://daum.net');

getDaumApi('/webtoon').then((res) => res);
getNaverApi('/webtoon').then((res) => res);
```

- closure 예시3

```
someElement.addEventListener(
  'click',
  debounce
)


someElement.addEventListener(
  'click',
  throttle
)
```
