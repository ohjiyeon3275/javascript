
### 드모르간 법칙

```
const isValidUser = true;
const isValidToken = true;


// 서버에서 받아오는 boolean값이라서
// 어쩔수없이 계속 해당변수를 재활용할수밖에없음
if(isValidToken && isValidUser) {
  console.log('로그인 성공')
}

//실패를 만들어야할경우
if(!(isValidToken && isValidUser)) {
  console.log('로그인 실패')
}

// but 
if(!(isValidToken && isValidUser && 뒤에 계속 조건이 계속된다면 어려워질수있다.)) {

```

- 감싸서 !처리해주는 것보다
```
if(A && B) {
  // 성공
}

if(!A || !B) {
  //실패
}
```

---

- `true` is not `true`
- `false` is not `false`

---

or -> and로 바꾸고 각자 ! 로 하면됨


