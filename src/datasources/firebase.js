// 파이어베이스 앱 객체 모듈 가져오기
import firebase from "firebase/compat/app";
//파이어베이스 패키지 모듈 가져오기
import "firebase/compat/database";

//파이어베이스 DB를 초기화시키고 연결하기
const oDB = firebase
  .initializeApp({
    databaseURL: "https://vue-to-do-d438f-default-rtdb.firebaseio.com",
  })
  .database();

//파이어베이스 DB객체 중에서 todos 항목을 다른 곳에서 사용하도록 공개
export const oTodosinDB = oDB.ref("todos");
