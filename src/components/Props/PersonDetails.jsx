import React from 'react'
import CourseDetails from './CourseDetails'
const PersonDetails = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <CourseDetails cursemame="react" cursegrade="100" />
    <CourseDetails cursemame="c#" cursegrade="99"/>

   

    </div>
  )
}

export default PersonDetails