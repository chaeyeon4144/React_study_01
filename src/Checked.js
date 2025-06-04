import "./Check.css";
import { useState } from "react";
function Checked() {
  const [agree, setAgree] = useState(false); //체크여부를 저장
  function handleCheckbox(e) {
    setAgree(e.target.checked); // 체크 상태 정장(true or change)
  }
  return (
    <>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h1>약관동의 체크예제</h1>
        <label>
          <input type="checkbox" checked={agree} onChange={handleCheckbox} />
          약관에 동의합니다
        </label>
        <p className="check_p">{agree ? "동의완료" : "❌ 아직 동의하지 않았어요"}</p>
      </div>
    </>
  );
}
export default Checked;
