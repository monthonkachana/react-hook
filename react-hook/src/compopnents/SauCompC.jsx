import React, { useState } from "react";

function SauCompC() {
  const [name, setName] = useState("?");
  const [midtern, setMidtern] = useState(0);
  const [final, setFinal] = useState(0);
  const [total, setTotal] = useState(0);
  const [grade, setGrade] = useState("?");

  const conditionGrade = (e) => {
    if (e > 80) {
      setGrade("A");
    } else if (e > 70) {
      setGrade("B");
    } else if (e > 60) {
      setGrade("C");
    } else if (e > 50) {
      setGrade("D");
    } else {
      setGrade("F");
    }
  };

  // -----------------------------------------------
  const halderchagn = (e) => {
    setName(e.target.value);
  };
  const halderchagnmidtern = (e) => {
    setMidtern(e.target.value);
  };
  const halderchagnfinal = (e) => {
    setFinal(e.target.value);
  };
  const halderclicktotal = (e) => {
    setTotal(parseFloat(midtern) + parseFloat(final));
    conditionGrade(parseFloat(midtern) + parseFloat(final));
  };

  return (
    <div>
      <h1>ผลการเรียน</h1>
      <hr />
      <br />
      <span>ป้อนชื่อ :</span>{" "}
      <input type="text" placeholder="ชื่อ" onChange={halderchagn} /> <br />
      <span>คะแนนกลางภาค :</span>{" "}
      <input type="text" placeholder="0.00" onChange={halderchagnmidtern} />
      <br />
      <span>คะแนนปลายภาค :</span>{" "}
      <input type="text" placeholder="0.00" onChange={halderchagnfinal} />
      <br />
      <br />
      <input type="button" value="ตกลก" onClick={halderclicktotal} />
      <input type="button" value="ยกเลิก" />
      <hr />
      <span>ชื่อ : {name} </span>
      <br />
      <span>คะแนนกลางภาค : {midtern} </span>
      <br />
      <span>คะแนนปลายภาค : {final} </span>
      <br />
      <span>คะแนนรวม : {total} </span>
      <br />
      <span>เกรดเฉลี่ย : {grade} </span>
      <br />
    </div>
  );
}

export default SauCompC;
