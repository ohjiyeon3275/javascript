### for문 배열 고차함수로 리팩터링

- 원화표기
```
const price = ['2000', '1000', '3000', '5000', '4000']

function getPrice(priceList) {
  let temp = []
  
  for (let i = 0 ; i < priceList.length ; i ++ ) {
    temp.push(priceList[i] + '원')
  }
  
  return priceList.map((price) => price + '원')
}

const result = getPrice(price)
```

- 1000원 초과만 출력

```
const price = ['2000', '1000', '3000', '5000', '4000']


const suffixWon = (price) => price + '원'
const isOverOneThousand => (price) => price > 1000


function getPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  
  return priceList.map(suffixWon)
}

const result = getPrice(price)
```
- 추가추가 요구사항 ? 

```
const price = ['2000', '1000', '3000', '5000', '4000']


const suffixWon = (price) => price + '원'
const isOverOneThousand => (price) => price > 1000


function getPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = priceList.filter(isOverOneThousand);
  
  return priceList.map(suffixWon)
}

const result = getPrice(price)
```

