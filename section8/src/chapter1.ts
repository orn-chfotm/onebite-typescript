/**
 * 인덱스드 엑세스 타입
 *
 * 인덱스를 이용 다른 타입내 특정 프로퍼티를 추출
 * 객체, 배열, 튜플에서 모두 사용 가능
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

/**
 * key 에 지정된 author string 리터럴 타입을 인덱스라 명칭
 * 이때 index에 들어가는 문자열은 값 형식이 아닌 리터럴 타입
 *
 * const key = "author";
 * key를 index에 넣을 경우 값으로 취급되어 에러 => Post[key]
 * -> typeof key 로 : "author" 타입을 가져오는 방식으로 해소는 가능
 */
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

function printAuthorInfoByPostList(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김동현",
    age: 31,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// Tuple 은 고정된 배열이기에 3의 outOfIndex
// type Tup3 = Tup[3];

type TupNum = Tup[number];
