### 직접 접근 지양


- 중요한 객체인 model에 쉽게 접근 가능
```
const model = {
  isLogin =: false,
  isValidToken: false,
}

function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

someElement.addEventListener('click', login);
```


- TO-BE
```
const model = {
  isLogin =: false,
  isValidToken: false,
}

// 레이어 추가
function setLogin(bool) {
  model.isLogin = bool;
  serverAPI.log(model.isLogin)
}

// 레이어 추가
function setIsValidToken(bool) {
  model.isValidToken = bool;
  serverAPI.log(model.isValidToken);
}

function login() {
  setLogin(true);
  setValidToken(true);
}

function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

someElement.addEventListener('click', login);
```

- flux => action => reducer => state 변화
- redux 는 자바스크립트 앱을 위한 예측가능한 상태 컨데이너임
  - `예측가능한`코드를 작성해서 동작이 예측 가능한 앱을 만들기 -> 디버깅이 쉬워짐
- getter property나 setter property를 설정 가능.
