import React, { useState } from 'react'
import { validate } from '../utils/validators'


let enter;
let val;
let idHandler;

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID',
}

const Input = ({ label, id, type, validators, errorText }) => {
  const [state , setState] = useState(INPUT_STATES.UNTOUCHED)


  const inputhandler = (e) => {
    setState(INPUT_STATES.UNTOUCHED)
    enter = e.target.value;
    idHandler = e.target.id;
    val = validate(enter, validators);
    console.log(val);
    console.log(e.target.id);
  }

  const blurhandler = (e) => {
    if (!val) {
      setState(INPUT_STATES.INVALID)
      // document.querySelector("div").classList.add('form-input--invalid') ;
      // document.querySelector('#p').innerHTML = errorText ;
      }else {
        setState(INPUT_STATES.VALID)
      }
    }
  


  return (
    <div className={`form-input ${state == 'INVALID'? 'form-input--invalid' : ''}`} data-testid="form-input" >
      <label htmlFor='form-input'>{label}</label>
      <input onChange={inputhandler} onBlur={blurhandler} id={id} />
      <p id='p'>{state == "INVALID" ? errorText : ""}</p>
    </div>
  )
}

export default Input
