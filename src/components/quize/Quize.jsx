import React from "react";
import { useEffect, useState } from "react";
import "./quize.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import Quetion from "../quetion/Quetion";
const Quize = ({ name, Score, Quetions, setScore, setQuetions }) => {
  const [options, setoptions] = useState("");
  const [currentQuetions, setcurrentQuetions] = useState(0);
  useEffect(() => {
    console.log(Quetions);
    setoptions(
      Quetions &&
        handleSuffle([
          Quetions[currentQuetions]?.correct_answer,
          ...Quetions[currentQuetions]?.incorrect_answers,
        ])
    );
  }, [Quetions,currentQuetions]);
  const handleSuffle =(option)=>{
      return option.sort(() => Math.random() - 0.5)

  }
  return (
    <>
      <div className="quize-sec">
        <span className="subtitle">welcome {name}</span>
        {Quetions ? (
          <>
            <div className="quize-info">
              <span>{ Quetions[currentQuetions].category}</span>
              <span>score :{ Score}</span>
            </div>
          <Quetion 
            currentQuetions={currentQuetions}
            setcurrentQuetions={setcurrentQuetions}
            options={options}
            Score={ Score}
            setScore={setScore}
            Quetions={Quetions}
           
            correct={ Quetions[currentQuetions]?.correct_answer}
          />
          </>
        ) : (
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )}
      </div>
    </>
  );
};

export default Quize;
