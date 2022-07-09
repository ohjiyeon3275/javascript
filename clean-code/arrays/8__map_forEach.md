### map과 forEach의 차이

```
const prices = ['1000', '2000', '3000']

const newPriceForEach = prices.forEach((price) => price + '원');
const newPriceMap = prices.map((price) => price + '원');
```

- 첫번째 차이 : 리턴 
```
const prices = ['1000', '2000', '3000']

const newPriceForEach = prices.forEach(function(price) {
  return price + '원';
})

const newPriceMap = prices.forEach(function(price) {
  return price + '원';
})

```

- 콘솔찍어보면 forEach는 ```undefined```
- map은 ```['1000원', '2000원', '3000원']```


