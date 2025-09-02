/**
 * 조건부 타입
 *
 * - extends / 삼항 연산자를 사용해서 특정 타입이 다른 타입을 확장하는 지 ? (대상타입이 비교타입을 확장하는 지)를
 * 비교하여 true / false 처리
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }
  return undefined;
}

let result = removeSpaces("hi im chfotm");
result.toUpperCase();

let result2 = removeSpaces(undefined);
