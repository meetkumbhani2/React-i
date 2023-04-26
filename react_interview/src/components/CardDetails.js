import React from 'react'

const CardDetails  = (props) => {
  return (
    <>
    <div className="model">
      <img src={props.img} alt="" /> 
      <p>{props.title}</p>
      <p>Year: {props.year}</p>
    </div>

     </>
  )
}

export default CardDetails;
