/**
 * 인터페이스
 */

/**
 * - 메서드 오버로딩을 사용하려면 함수 타입 표현식이 아닌 호출 시그니처를 사용해야한다.
 * - 인터페이스는 유니온이나 인터섹션 타입을 만들 수 없다. -> 타입 별칭이나 타입 주석에 활용해야한다.
 */
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "김동현",
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "홍길동";

person.sayHi();
person.sayHi(1, 2);
