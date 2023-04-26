import React from 'react'

const CardDetails = ({ children }) => {
  return (
    <>
      <div className="model">
        <img src={children.Poster} alt="" />
        <p>{children.Title}</p>
        <p>Year: {children.Year}</p>
        <button
        >
          {children.isFav ? "Already Liked" : "Wanna Like"}
        </button>
      </div>

    </>
  )
}

export default CardDetails
