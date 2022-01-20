import React from "react";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import "./quetion.scss";
import ErrorMeassage from "../errorfield/ErrorMeassage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Quetion = ({
  currentQuetions,
  setcurrentQuetions,
  options,
  Score,
  setScore,
  Quetions,
  correct,
}) => {
  const [Select, setSelect] = useState(0);
  const [error, seterror] = useState(false);
  const history=useHistory();
  const handleSelect = (i) => {
    if (Select === i && Select === correct) {
      return "Select";
    } else if (Select === i && Select !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "Select";
    }
  };
  const handleCheck = (i) => {
    setSelect(i);
    if (i === correct) setScore(Score + 1);
    seterror(false);
  };
  const handleNext=()=>{
if (currentQuetions>8){
    history.push("./Result")
}else if(Select){
    setcurrentQuetions(currentQuetions+1)
    setSelect()
}else {
    seterror('please select an option first')
}
  }
  const handleSubmit=()=>{

  }
  return (
    <>
      <div className=" container quetion">
        <h1>Quetion {currentQuetions + 1}</h1>
        <div className="container singleQuestion">
          <h2>{Quetions[currentQuetions].question}</h2>
          <div className=" row option">
            {error && <ErrorMeassage>{error}</ErrorMeassage>}
            {options &&
              options.map((i) => (
                <div className="col-md-6 mt-2" key={i}>
                  <button
                    onClick={() => {
                      handleCheck(i);
                    }}
                    className={`singleOption ${Select && handleSelect(i)}`}
                    disabled={Select}
                    key={i}
                  >
                    {i}
                  </button>
                </div>
              ))}
          </div>
          <div className="controls">
 <Button size="large" variant="contained" color="secondary" style={{width:195}} onClick={handleSubmit}>
 quite
</Button>
<Button  size="large" variant="contained" color="primary" style={{width:195}} onClick={handleNext}>
next quetion
</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quetion;
