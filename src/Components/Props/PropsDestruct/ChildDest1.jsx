import React from 'react'

function ChildDest1({stud_data, stud_city}) {
  return (
    <div>
        <p>
            Student name: <ins>{stud_data}</ins> <br />
            Student City: <ins>{stud_city}</ins>

        </p>
    </div>
  )
}

export default ChildDest1