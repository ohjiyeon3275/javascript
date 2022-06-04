### 템플릿 문자열

- string 합칠 때
  - 기존JS : var combined = string1 + '' + string2
  - ES6 : var combined = `${string1} ${string2}`
- 줄바꿈
  - 기존JS : var multiLine = 'multi\nline'
  - ES6 : var multiLine = `multi
                            line`
- 연산
  - 기존JS : var operator = '곱셈 결과는 ' (va1 * val2) + '입니다'
  - ES6 : var operator = `곱셈 결과는 ${val1 * val2} 입니다`
- 삼항연산자
  - 기존JS : var operator = '결과값은 ' + (value ? '참' : '거짓') + '입니다'
  - ES6 : var operator = `결과값은 ${ value ? '참' : '거짓'} 입니다.`
  - 
