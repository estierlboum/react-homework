import React from 'react'

const CourseDetails = (props) => {
  return (
    <div>
      <h1>{props.cursemame}</h1>
      <p>{props.cursegrade}</p>
    </div>
  )
}

export default CourseDetails