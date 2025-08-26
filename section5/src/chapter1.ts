/**
 * 인터페이스의 확장
 *
 * type Animal ...
 * - 상속 받는 부모가 타입 별칭이여도 확장 가능하다.
 * - 인터페이스는 객체 타입이면 확장 가능하다.
 */

interface Animal {
  name: string;
  color: string;
}

/**
 * 상속 받는 interface 에서 프로퍼티의 재정의도 가능하다.
 * - 하지만 원본 타입의 서브 타입만 재정의 가능하다는 규칙이 있다.
 */
interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  inScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/**
 * 인터페이스트 여러 인터페이스를 상속하는 다중 확장 가능하다.
 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  inScratch: true,
};
