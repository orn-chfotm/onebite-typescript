// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};
// 타입 별칭은 동일한 스코드에 중복되면 안된다.

// 스코프에 따라 Type 동일 명 따로 지정 가능
function func() {
  type User = {};
}

let user1: User = {
  id: 1,
  name: "김동현",
  nickname: "chfotm",
  birth: "1995.12.03",
  location: "인천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "chfotm",
  birth: "1995.12.03",
  location: "인천시",
};

// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
// };

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountyNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countyNumberCodes: CountyNumberCodes = {
  Korea: 410,
};
