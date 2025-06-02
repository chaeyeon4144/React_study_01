import { useState } from "react";
function Count() {
  // 자바 스크립트
  // 숫자 카운드
  const [count, setcount] = useState(0);
  //숫자 카운트
  function plusCount() {
    setcount(count + 1);
  }
  function downCount() {
    setcount(count - 1);
  }

  // html
  return (
    <div>
      <p>지금 숫자: {count}</p>
      <button onClick={plusCount} style={{ marginLeft: "10px" }}>
        숫자 올리기+
      </button>
      <button onClick={downCount} style={{ marginLeft: "10px" }}>
        숫자 내리기-
      </button>
    </div>
  );
}
export default Count;
