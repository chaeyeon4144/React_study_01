import { useState } from "react";

function Dropdown() {
  const [color, setcolor] = useState("red");
  function handlechange(e) {
    setcolor(e.target.value);
  }
  return (
    <>
      <div>
        <h1>좋아하는 색 선택 </h1>
        <select onChange={handlechange} value={color}>
          <option value="red">빨강</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="yellow">노랑</option>
        </select>
        <p>
          당신이 선택한 색인 <strong style={{ color }}>{color}</strong>입니다.
        </p>
      </div>
    </>
  );
}
export default Dropdown;
