    ### Default Case
    
    
    
    ```
    function sum(x, y) {
      return x + y;
    }
    
    sum(100, 200)
    sum()
    ```
    
    - 기본값을 정해놓는 경우
    ```
    function main(x, y) {
      x = x || 1;
      y = y || 1;
      
      return x + y
    }
    
    sum()
    ```
    
  - 안전하고 확장성 높은 코드를 위함  
    ```
    function createElement(type, height, width) {
    
      const element = document.createElement(type);
      
      element.style.height = height || 100;
      element.style.width = width || 100;
      
      return element
    }
    
    createElement()
    ```
    
- 디폴트값이 필요하지 않다고 생각해도 input값이면 오류가 발생할 수 있으므로

```
function registerDay(userInput) {
  switch(userInput) {
    case '월'
    case '화'
    case '수'
    ...
    default '월'
  }
}
```

- 리액트에서
```
const Root = () => (

  <Route>
    <Switch>
    
    </Switch>
  </Route>
)
```
- swiper 라이브러리를 봐도 디폴트값 중요하게 생각함.
- parseInt 이런것들도 두번째자리에 디폴트없이쓰면 에러날 수 있음.
- -> 함수같은거 만들어서 해결가능.


    
