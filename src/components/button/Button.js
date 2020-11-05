import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai'


import './Styles.scss';

const Button = (props) => {

  return (
    <div className={"submitButton"}>
      <div className={"submitButton--label"} onClick={props.handleSubmit} >{props.label}</div>
      {!props.isLoading ? <div className={"submitButton--extra-space"}></div> :
      <div className={"submitButton--loading"}>{props.isLoading && <AiOutlineLoading />}</div>}
    </div>
  )
}

export default Button;