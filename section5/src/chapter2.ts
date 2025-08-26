/**
 * 선언 합침
 *
 * - 타입 별칭 중복 선언하면 에러
 * - 인터페이스는 중복 선언하면 모든 프로퍼티가 합쳐진 객체 타입으로 선언된다.
 * - 동일한 프로퍼티를 중복 선언하려면 타입을 동일하게 선언해야한다. (서브 타입 불가)
 */

interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "",
  age: 30,
};

/**
 * 모듈 보강
 *
 * 인터페이스 선언합침은 보통의 상황에서는 자주 사용되지 않는다.
 * 주로 Lib 같은 이미 사용되는 코드의 사용시 로컬의 확장에서 프로퍼티를 추가할 경우 재선언을 통해 합침을 사용한다.
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
