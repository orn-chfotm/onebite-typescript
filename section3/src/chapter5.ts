/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "김동현",
  profile: {
    nickname: "chfotm",
  },
  urls: [""],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

/**
 * 암묵적 any 타입 진화
 */
// 명시적 any 타입은 쭉 any
// let d: any;
let d;
// any -> number
d = 10;
d.toFixed();

// number -> string
d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
