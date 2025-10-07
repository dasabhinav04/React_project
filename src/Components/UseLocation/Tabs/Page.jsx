import React from 'react'
import { useLocation } from 'react-router-dom'

function Page() {
    const location = useLocation();
  return (
    <div>
        <h1>{location.hash ? location.hash : "No Hash Section Found"}</h1>
        <ul>
            <li><Link smooth to= "#story">Our Story</Link></li>
            <li><Link smooth to= "#events">Events</Link></li>
            <li><Link smooth to= "#story">Venue</Link></li>
        </ul>
        <header>
            <div>
                <h1>You are Invited</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugit, beatae minus consequuntur nemo aliquid perspiciatis deleniti eligendi vel eaque sed. 
                    Et id explicabo voluptatum ipsam rerum provident dignissimos voluptatibus aliquam.</p>   
            </div>
        </header>

        <section className='section' id='story'>

        </section>

          <section className='section' id='events'>

        </section>

          <section className='section' id='venu'>

        </section>
    </div>
  )
}

export default Page