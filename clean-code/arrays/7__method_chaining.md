### 배열 메서드


```

const suffixWon = (price) => price + '원'
const isOverOneThousand = (price) => Number(price) > 1000;
const ascList = (a, b) => a - b;

function getPrice(priceList) {
  return priceList
  .filter(isOverOneThousand)
  .sort(ascList)
  .map(suffixWon)
}

const result = getPrice(price);

```

- 명확한 파이프라인처럼 코드를 짤 수 있다.

