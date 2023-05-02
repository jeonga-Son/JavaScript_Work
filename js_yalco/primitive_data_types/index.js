const a = true,
  b = 123.45,
  c = "안녕하세요!";

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

const e = Symbol("hello");
console.log(typeof e); // 이건 나중에

/*
  1. 불리언 boolean

  "기다" / "아니다"
  참 또는 거짓 (true or false) - 상반된 둘 중 하나의 값을 담을 수 있음
  직접 할당되기보다는 반환값으로 프로그램 곳곳에서 활용됨
 */

let isEmployed = true;
let isMarried = false;

console.log("직업 있음:", isEmployed);
console.log("기혼:", isMarried);

const f = 1 > 2;
const g = 1 < 2;

console.log(f, typeof f);
console.log(g, typeof g);

/*
  2. 숫자 number

  자바스크립트에는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
  정수는 2^53 - 1까지 안정적으로 표현 가능 - 더 큰 정수는 이후 배울 BigInt로
*/

let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);

/*
  3. 문자열 string

  "글자(들)" ...이라고 일단 이해
  큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸인 텍스트 데이터
  유니코드 문자 - 전 세계의 모든 문자 표현 가능
*/

let first_name = "Brendan";
let last_name = "Eich";
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(typeof typeof true, typeof typeof 123.45, typeof typeof "Hello");

/*
  4. undefined

  값이 부여되지 않은 상태라는 의미
  그러나 undefined도 값임 많은 다른 언어들과 다른 점
  아무 것도 반환하지 않는 구문 - undefined 반환
*/

console.log(typeof x);

/*
  5. null

  의도적인 빈 값을 의미
  그러나 null 역시 값임. - "비어있다"란 의미의 값
  object(객체) 등이 들어있거나 반환되어야 하지만 없을 때 주로 사용
  객체 생성이 실패한 경우 등에 대신 반환
  주의! typeof가 object를 반환 초기 오류 - 객체는 원시타입이 아님
*/

// let x;
// console.log('값 넣기 전', typeof x);

// x = null;
// console.log('null값 넣은 후', typeof x);

// let x = 1;
// console.log("변경 전", x);

// x = null;
// console.log("변경 후", x);

let x = null;
console.log(typeof null, typeof x);

// null 여부는 아래와 같이 확인할 것
console.log(x === null);
