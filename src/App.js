import { useState } from "react";

function App() {
  // 자바스크립트 작성
  const [emoji, setEomji] = useState("(●'◡'●)");
  // 변수  , event명        useState(첫값)
  function changeEoji() {
    setEomji("(┬┬﹏┬┬)");
  }
  function toggleEmoji() {
    setEomji(emoji === "(●'◡'●)" ? "(┬┬﹏┬┬)" : "(●'◡'●)");
  }
  
  // HTML 작성
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px", background: "beige", height: "500px" }}>
        <p>지금 기분: {emoji}</p>
        <button onClick={changeEoji}>기분 바꾸기</button>
        <button onClick={toggleEmoji}>기분 바꾸기</button>
      </div>
      
    </>
  );
}

export default App;
