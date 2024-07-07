import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const [value, setval] = useState(null);
  let [borderColor1, setBorderColor1] = useState(null);
  let [borderColor2, setBorderColor2] = useState(null);
  let [value1, setval1] = useState(null);
  let [spanColor, setSpanColor] = useState(null);
  let [submitsBackgroundColor, setSubmitBackgroundColor] = useState(null);
  let [onOf, setOnOf] = useState(true);
  let [name, setName] = useState(null);
  let [age, setAge] = useState(null);

  function userHandler(e) {
    let Name = String(e.target.value);

    setName(Name);

    return Number(Name[0])
      ? (setBorderColor1("red"),
        setSpanColor("red"),
        setval("Use first character in Alphabat only."))
      : (setval(null), setSpanColor("white"), setBorderColor1(null));
    /*(val[0]=== val[0].toUpperCase())? (setval("Use first character in lower case") ):setval(null)*/
  }

  function ageHandler(e) {
    let Age = String(e.target.value);
    setAge(Age);

    return Age.length <= 3
      ? (setval1(null), setSpanColor(null), setBorderColor2(null))
      : (setval1("Invalid age"), setSpanColor("red"), setBorderColor2("red"));
  }

  function redirects() {
    const navigate = useNavigate;
    return (
      <div>
        onOf? ((setSubmitBackgroundColor( 'rgba(0, 131, 0,
        0.753)')),setOnOf(false)):
        (setSubmitBackgroundColor(null),setOnOf(true)) navigate(
        {`http://localhost:3000/users/${name}?age=${age}`})
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 id="button" style={{ color: "white" }}>
        Login
      </h1>
      <br /> <br />
      <form action="">
        <input
          className="inputs"
          style={{ borderColor: borderColor1 }}
          type="text"
          onChange={userHandler}
          placeholder="Name"
        />
        <br /> <br />
        <span className="span" style={{ color: spanColor }}>
          {value}
        </span>
        <br /> <br /> <br />
        <input
          onChange={ageHandler}
          className="inputs"
          type="text"
          placeholder="Age"
          style={{ borderColor: borderColor2 }}
        />
        <br />
        <br />
        <span style={{ color: spanColor }}>{value1}</span>
        <br /> <br /> <br />
        <div id="button">
          <button
            className="button"
            type="submit"
            onClick={redirects}
            style={
              ({ backgroundColor: submitsBackgroundColor }, { color: "silver" })
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
