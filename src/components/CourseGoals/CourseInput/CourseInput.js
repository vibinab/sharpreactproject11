import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const[ IsValid, setIsValid]= useState(true) 
  const [type, settype]=useState(false)

  const goalInputChangeHandler = event => {

    if(event.target.value.trim().length>0){
      setIsValid(true)
      settype(true)

    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length===0){

      setIsValid(false)
      return
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:!IsValid?'red':'black'}}>Course Goal</label>
        <input type="text" style={{
          borderColor:!IsValid?'red':'black',
          background:!IsValid?'salmon':'transparent'
          }} 
          onChange={goalInputChangeHandler} />
      </div>
      {/* <Button style={{background:!IsValid?'green':'red'}} type="submit">Add Goal</Button> */}
      <button style={{background:!type?'red':'green'}} type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
