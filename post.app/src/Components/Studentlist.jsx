import React from 'react'
import { Link } from 'react-router-dom'

const Studentlist = () => {
  const student=['Manan','Luqman','Adnan']
  return (
    <div>
      {student.map((student)=>(
        <>
        <Link to={`Studentlist/${student}`}>
          <h1>{student}</h1>
        </Link>
        </>
      ))}
    </div>
  )
}

export default Studentlist
