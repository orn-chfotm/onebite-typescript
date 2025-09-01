/**
 * 맵드 타입
 * - 객체타입을 조작하는 기능
 * - type 에서만 사용
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

/* 위의 맵드 타입 문법은 결과적으로 아래와 같은 type을 지정하게 된다.

  type User {
    id: number;
    name: string;
    age: number;
  }
*/

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "김동현",
    age: 31,
  };
}

const user = fetchUser();
// user.id = "test"; readonly 속성이라 수정 불가

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "김동현",
  age: 27,
});
