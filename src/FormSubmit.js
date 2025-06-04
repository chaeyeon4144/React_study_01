import { useState } from "react";

function FormSubmit() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [result, setResult] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setResult(`이름:${name} , 이메일: ${email}`);
    setname("");
    setemail("");
  }
  return (
    <>
      <div>
        <h2>폼 전송</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="이름" />
            <h1></h1>
            <label></label>
          </div>
          <div>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <button type="submit">제출</button>
        </form>
        <p>{result}</p>
      </div>
    </>
  );
}

export default FormSubmit;
