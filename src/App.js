import React, { useState } from "react";
import Header from "../src/pages/header/Header";
import "./App.scss";
import "./style/main.scss";
import Footer from "./pages/footer/Footer";
import Home from "./components/home/Home";
import Quize from "./components/quize/Quize";
import Result from "./components/result/Result";
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
const App = () => {
  const [name, setname] = useState("");
  const [Quetions, setQuetions] = useState("");
  const [Score, setScore] = useState(0);
  const fetchQuestions = async (Category = "", Difficulty = "") => {
    const {data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        Category && `&category=${Category}`
      }${Difficulty && `&difficulty=${Difficulty}`}&type=multiple`
    );

    setQuetions(data.results)
  };
  return (
    <>
      <div className="container-fluid quize">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              name={name}
              setname={setname}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route exact path="/quize">
            <Quize 
            name={name} 
            Score={Score}
            Quetions={Quetions}
            setScore={setScore}
            setQuetions={setQuetions}
            />
          </Route>
          <Route exact path="/result">
            <Result name={name} Score={Score}/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
