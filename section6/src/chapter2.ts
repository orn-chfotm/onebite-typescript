/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  // 접근 제어자 default => public
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자
  // 생성자 매개변수에 접근 제어자 지정 시 필드 객체 자동 생성
  // -> 필드 객체의 default 는 public 이지만 매개변수에 직접 지정하지 않으면 필드 프로퍼티를 생성하지는 않는다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 매개변수에 접근 제어자 지정 시 초기화도 자동으로 처리
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("김동현", 30, "developer");
// employee.name = "홍길동";
// employee.age = 31;
employee.position = "디자이너";

console.log(employee);
