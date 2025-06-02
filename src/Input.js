import { useState } from "react";
function Input() {
  // 이름
  const [name, setName] = useState("");
  function HandleChange(e) {
    setName(e.target.value);
  }
  return (
    // 입력창
    <div>
      <h1>너의 이름은</h1>
      <input type="text" placeholder="이름을 입력하세요" value={name} onChange={HandleChange}></input>
      <p>
        안녕하세요 , <strong>{name || "()"}</strong>님
      </p>
    </div>
  );
}
export default Input;
