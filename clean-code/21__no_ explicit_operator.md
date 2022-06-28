 ### 명시적인 연산자 사용 지양
 
 연산자 우선순위에 대해 안전하게
 
 ```
 
 let number
 
function increment(number) {
  number--
 }
 
 function increment(number) {
  number++;
 } 
 
 if((isLogin && token) || user)
 ```
 
 - 사람이 보기 편하게
 - 나중에 보기 편하게

예측 가능하고 디버깅하기 쉬운 !
연산자 우선순위 ( + )
