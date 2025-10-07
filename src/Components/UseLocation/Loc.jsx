import React from 'react'
import { useLocation } from 'react-router-dom'

function Loc() {
    const location = useLocation();
    const queryparams = new URLSearchParams(location.search);
    const queryValue = queryparams.get('r')

    // http://localhost:5173/search?r=test#section Search in URL

    // 
  return (
    <div>
        <h3>Location</h3>
        <p>{typeof(location)}</p>
        <p>{JSON.stringify(location)}</p>
        <p>{(location.pathname)}</p>
        <p>{(location.search)}</p>
    </div>
  )
}

export default Loc