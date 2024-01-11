import React from 'react'
import { useParams } from 'react-router-dom'

const Greetstudent = () => {
    const params=useParams()
  return (
    <div>
      <h1>Hello {params.student_name} Gujjar</h1>
    </div>
  )
}

export default Greetstudent
