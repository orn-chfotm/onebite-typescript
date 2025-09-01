/**
 * keyof 연산자
 * -> 무조건 타입에만 사용할 수 있는 연산자
 * 타입으로부터 모든 프로퍼티의 key를 Union type으로 추출
 *
 *
 * ex) keyof Person => "name" | "age"
 */

interface Person {
  name: string;
  age: number;
}

type Person2 = typeof person2;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

// function getPropertyKey2(person: Person, key: keyof Person2) {
//   return person[key];
// }

function getPropertyKey2(person: Person, key: keyof typeof person2) {
  return person[key];
}

const person: Person = {
  name: "김동현",
  age: 31,
};

const person2 = {
  name: "김동현",
  age: 31,
};

getPropertyKey(person, "name");

typeof person === "object";
