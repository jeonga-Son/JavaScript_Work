/*  1. 변수
    let => 이미 만들어진 주머니를 다시 만들 수 없음 (재선언 x) */

let x;
console.log(x); // 변수 선언만 함. undifined(=> 하나의 값)

x = 1; // 값을 넣어줌
console.log(x);

let y = x;
console.log(x, y); // 같은 값이 다른 데이터 영역에 저장되지 않음. (메모리 절약)

x = "Hello!";
console.log(x, y);

/* 2. 상수
  담긴 값이 바뀔 수 없는 주머니
  const 사용
  흔히 대문자로 명명 (여러 곳에서 사용될 공통 값인 경우)
  선언하기만 하는 것은 불가능
  상수는 값의 변경 불가능
  값이 바뀔 일이 없는 데이터는 상수로 선언할 것 */

const PI = 3.14;
console.log("원주율 : ", PI);
