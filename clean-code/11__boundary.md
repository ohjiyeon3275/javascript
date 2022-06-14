### begin, end

```
function reservationDate(beginDate, endDate){
  // code code
}

reservationDate('YYYY-MM-DD', 'YYYY-MM-DD')
```

- 시작점과 끝을 표현해낼 수 있는 암묵적인 규칙이 있으면 좋다.


### first, last

```
const student = ['포코', '존', '토니', '케잍']

function getStudents(beginDate, endDate) {
  // code code
}

getStudent('YYYY-MM-DD', 'YYYY-MM-DD')

getStudent('포코', '케잍');
```
- 포함된 양 끝을 의미함
- ~ 부터 ~ 까지
- 안에있는 요소에 대한 것들, html요소 등
- DOM요소에 firstChild, lastChild

### prefix, suffix
- prefix : 명사 앞에 붙는 접두사
  - JS내에 set 예약어, get예약어
    - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get
  - use가 붙은 리액트 훅
  - jquery도 $를 붙힌다는 약속
  - #private 필드 ( _ ) #키워드, underscore라이브러리, lodash라이브러리.
  - ``` this._name = name; ```
  - ``` #name = name; ```
  - 변수, 폴더, 파일 등을 팀 내 규칙을 정할 수 있음
- suffix : 명사 뒤에 붙는 접미사
  - 폴더에 s붙혀 여러개임을 암시 가능



