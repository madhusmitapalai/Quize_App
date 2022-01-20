import React ,{useState} from "react";
import img from "../../pages/images/quiz-home.svg";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import "./home.scss";
import Categories from "../../data/Categories";
import ErrorMeassage from "../errorfield/ErrorMeassage";
import { useHistory } from "react-router";
const Home = ({name,setname ,fetchQuestions}) => {
  const [Category, setCategory] = useState("")
  const [Difficulty, setDifficulty] = useState("")
  const [error, seterror] = useState(false)
  const history=useHistory();
  const handleSubmit=()=>{
    if(!Category||!Difficulty||!name){
      seterror(true);
      return
    }else{
      seterror(false);
      fetchQuestions(Category,Difficulty)
      history.push('./Quize')
    }

  }
  return (
    <>
      <div className="container home">
        <div className="row">
          <div className="col-md-6 col-sm-12 order-sm-1 order-md-2">
            <img src={img} alt="hdhdf" className="banner" />
          </div>
          <div className="col-md-6 col-sm-12 order-md-1 order-sm-2">
            <div className="setting">
              <span className="span">quize settings</span>
              <div className=" settings_select">
              {error&&<ErrorMeassage>please fill the all fields</ErrorMeassage>}
                <TextField
                 label="your name"
                 variant="standard"
                  style={{ marginBottom: 30 }}
                  onChange={(e)=>setname(e.target.value) }
                  value={name}
                />
                <TextField
                  select
                  label="select category"
                  variant="outlined"
                  style={{ marginBottom: 30 }}
                  onChange={(e)=>setCategory(e.target.value) }
                  value={Category}
                >
                  {Categories&& Categories.map((cat) => (
                    <MenuItem key={cat.category} value={cat.value}>
                      {cat.category}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Select Difficulty"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  onChange={(e)=>setDifficulty(e.target.value) }
                  value={Difficulty}
                >
                  <MenuItem key="Easy" value="easy">
                    Easy
                  </MenuItem>
                  <MenuItem key="Medium" value="medium">
                    Medium
                  </MenuItem>
                  <MenuItem key="Hard" value="hard">
                    Hard
                  </MenuItem>
                </TextField>
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                  start quize
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
