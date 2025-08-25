/**
 * 함수 타입 표현식
 *
 * 호출 시그니처, 함수 시그니처 라고도 부름
 */

type Operation = (a: number, b: number, c: number) => number;

// const add: Operation = (a, b) => a + b;

// 함수의 타입을 표현식으로 직접 정의할때는 매개변수의 갯수와 타입을 맞춰줘야한다.
const add: (a: number, b: number) => number = (a, b) => a + b;
const sum: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sum2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
