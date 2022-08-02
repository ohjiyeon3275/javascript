### 콜백함수

- 함수의 실행권을 다른함수에위임하는것

```

someElement.addEventListener('click', function() {
  console.log(someElement + '클릭이 됨');
})

DOM.prototype.addEventListener = function(eventType, cbFunc) {
  if( eventType === 'click') {
    const clickEventObject  = {
      target : {},
    };
    
    cbFunc(clickEventObject)
  }
}

```
- 이런 코드가 있다고 하면
```
function register() {
  const isConfirm = confirm(
    '회원가입 성공'
  )
  
  if(isConfirm) {
    redirectUserInfoPage();
  }
}

function login() {
  const isConfirm = confirm(
    '로그인 성공'
  )
  
  if(isConfirm) {
    redirectIndexPage();
  }
}

```

- 콜백함수

```
function confirmModal(message, cbFunc) {
  const isConrifm = confirm(message);
  
  if(isConfirm && cbFunc) {
    cbFunc();
  }
}

function register() {
  confirmModal('회원가입에 성공함', redirectUserInfo)
}

function login() {
  confirmModal('로그인에 성공함', redirectIndexInfo)
}


```
- 각각의 함수를 호출했을때 각각의 공통된코드를 호출
- 콜백을 받아서 실행하는 것이기때문에 함수 자체를 넘겨야함 - () 없이
- 콜백함수를 통해서 제어권을 넘김


