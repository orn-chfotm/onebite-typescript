// object
// 타입 스크립트 -> 구조 기준 타입 추론
// 구조적 타입 시스템 -> Property Based Type System

let user: {
  id?: number; // ?: 값이 있어도 되고 없어도 되는 Optional Property
  name: string;
} = {
  id: 1,
  name: "김동현",
};

let config: {
  readonly apiKey: string; // readonly 수정 불가능한 property 옵션 (읽기 전용 옵션)
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
