### Rest Parameters


```
function sumTotal() {
  return Array.from(arguments).reduce(
    (acc, curr) => acc + curr
  )
}

sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

```

나머지 매개변수 : 함수 선언부에서 
```
function sumTotal(...args) {
  Array.isArray(args)

  typeof (arguments) // false
  
  return args.reduce(
    (acc, curr) => acc + curr,
  )
}

sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

```

- 다른 매개변수와도 같이 사용하는경우 있음

```
function sumTotal(initValue, ...args) {
  console.log(initValue)
  
  return arg.reduce(
    (acc, curr) => acc + curr,
    initValue,
    )
   }
}
```

인자가 가변적으로 들어올때 잘 사용할 수 있음
유사배열 x 배열처럼 
