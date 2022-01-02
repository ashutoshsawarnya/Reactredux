import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {connect} from "react-redux"
import * as action from "./redux/action/action"

function App({age,onAgeUp,onAgeDown,loading}) {
 console.log("Hello");

  return (
    <div className="App">
      <div>Age: <span>{age}</span></div>
      <button onClick={onAgeUp}>Age Up</button>
      <button onClick={onAgeDown}>Age Down</button>
      { loading && <img src={logo} className="app-logo"/>}
      <hr/>
      {/* <div>History</div>
      <div>
        <ul>
          {
              history.map(data =>(
                <li key={data.id} onClick={() =>{onDelItem(data.id)}}>{data.age}</li>
              ))
          }
        </ul>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
     age: state.age,
     loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onAgeUp: () => dispatch(action.ageUp(1)),
    onAgeDown: () => dispatch(action.ageDown(1))
    // onDelItem: (id) =>dispatch({ type: "DEL_ITEM",key:id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
